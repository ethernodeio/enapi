import { AddNode, RemoveNode, GetNodeContainerInfo } from "../__GENERATED_TYPES__/index.js";
import os from "os";
import Account from "../models/account";
import Docker from "dockerode";
import { exec } from "child_process";
import { checkJWT } from "../middleware/checkauth";
const docker = new Docker({ socketPath: "/var/run/docker.sock" });
const cpu = os.arch();
const ram = os.totalmem();
console.log("CPU Arch: " + cpu);
console.log("Host RAM: " + ram);
console.log("enAPI Ready to start Blockchain Nodes");

// #######################################
//          ####NODE METHODS ####
// #######################################
export const addNode: AddNode = async (JWTtoken, userName, nodeName, nodeNetwork, syncType, rpcApi, wsApi) => {
  await checkJWT(JWTtoken);
  const newNode = await dbCreateNode(JWTtoken, userName, nodeName, nodeNetwork, syncType, rpcApi, wsApi);
  return newNode;
};
export const removeNode: RemoveNode = async (JWTtoken, userName, containerId, nodeName, removeNodeData) => {
  await checkJWT(JWTtoken);
  const removeContainer = await dbRemoveNode(JWTtoken, userName, containerId, nodeName, removeNodeData);
  return removeContainer;
};
export const getNodeContainerInfo: GetNodeContainerInfo = async (JWTtoken, containerId): Promise<any> => {
  await checkJWT(JWTtoken);
  return new Promise((resolve, reject) => {
    docker.getContainer(containerId).inspect((err, data: { Id: string, Created: string, State: { Status: string }, NetworkSettings: { Ports: any } }) => {
      if (err) {
        console.log(err);
        throw new Error(err);
      }
      if (data.NetworkSettings.Ports["8545/tcp"]["0"].HostPort) {
        var rpcPort = data.NetworkSettings.Ports["8545/tcp"]["0"].HostPort;
      } else {
        var rpcPort: any = "disabled";
      }
      if (data.NetworkSettings.Ports["8546/tcp"]["0"].HostPort) {
        var wsPort: any = data.NetworkSettings.Ports["8546/tcp"]["0"].HostPort;
      } else {
        var wsPort: any = "disabled";
      }

      const selected = [{
        containerID: data.Id,
        containerCreated: data.Created,
        containerState: data.State.Status,
        rpcPort,
        wsPort,
      }];
      resolve(selected);
    });
  });
};
// #######################################
//   ####MODELS FOR NODE METHODS ####
// #######################################
const dbCreateNode = async (JWTtoken: string, userName: string, nodeName: string, nodeNetwork: string, syncType: string, rpcApi: boolean, wsApi: boolean): Promise<any> => {
  const swap = ram * 2;
  const maxpeers = 25;
  const bootnodes = "";
  if (userName === "" || userName === undefined) {
    throw new Error("Username Error");
  }
  if (nodeName === "" || nodeName === undefined) {
    throw new Error("Nodename Error");
  }
  if (nodeNetwork === "" || nodeNetwork === undefined) {
    throw new Error("Node Network Error");
  }
  const geth = [
    "geth",
    "--identity=" + userName + "-" + nodeName,
    "--shh",
    "--verbosity=3",
    "--maxpeers=" + maxpeers,
    "--cache=2072",
    "--lightserv=90",
    "--rpcvhosts=*",
  ];

  if (nodeNetwork !== "ethnet") {
    geth.push("--" + nodeNetwork);
  }

  if (syncType === "" || syncType === undefined) {
    geth.push("--syncmode=full ");
  } else if (syncType === "archive") {
    geth.push("--syncmode=full");
    geth.push("--gcmode=archive");
  } else {
    geth.push("--syncmode=" + syncType);
  }

  if (bootnodes) {
    geth.push(bootnodes);
  }
  if (rpcApi) {
    geth.push("--rpc");
    geth.push("--rpcaddr=0.0.0.0");
    geth.push("--rpccorsdomain=*");
  }
  if (wsApi) {
    geth.push("--ws");
    geth.push("--wsaddr=0.0.0.0");
    geth.push("--wsorigins=*");
  }
  if (cpu === "x64") {
    var dockerImage = "bakon3/multigethx86";
  } else if (cpu === "armhf") {
    var dockerImage = "bakon3/multigetharmpi";
  } else if (cpu === "arm64") {
    var dockerImage = "bakon3/multigetharm";
  } else {
    var dockerImage = "bakon3/multigethx86";
  }
  if (nodeNetwork === "ethnet") {
    var ipcPath = "/media/ssd/.multigeth/" + userName + "/" + nodeName + "/" + nodeNetwork + "/:/root/.ethereum/";
  } else {
    var ipcPath = "/media/ssd/.multigeth/" + userName + "/" + nodeName + "/" + nodeNetwork + "/:/root/.ethereum/" + nodeNetwork + "/";
  }
  const createContainer = await docker.createContainer({
    Image: dockerImage,
    name: userName + "-" + nodeName,
    AttachStdin: false,
    AttachStdout: true,
    AttachStderr: true,
    ExposedPorts: {
      "8545/tcp": {},
      "8546/tcp": {},
      "30303/tcp": {},
      "30303/udp": {},
    },
    Labels: {
      userName,
      nodeName,
      nodeNetwork,
    },
    WorkingDir: "/root/.ethereum/" + nodeNetwork,
    HostConfig: {
      Binds: [
        // '/var/.ethereum-classic/' + userName + '/' + nodeName + '/' + networkType + '/:/root/.ethereum-classic/' + networkType + '/'
        // '/var/.mantis/' + userName + '/' + nodeName + '/' + networkType + '/:/.mantis/'
        ipcPath,
      ],
      PortBindings: {
        "8545/tcp": [{ HostPort: "" }],
        "8546/tcp": [{ HostPort: "" }],
        "30303/tcp": [{ HostPort: "" }],
        "30303/udp": [{ HostPort: "" }],
      },
      RestartPolicy: {
        Name: "unless-stopped",
      },
      Memory: ram,
      MemorySwap: swap,
      MemorySwappiness: 50,
      OomKillDisable: true,
    },
    Tty: true,
    Entrypoint: [...geth],
    // Env: ['VIRTUAL_HOST=' + userName + '-' + nodeName + '.etcnodes.io', 'LETSENCRYPT_HOST=' + userName + '-' + nodeName + '.etcnodes.io', 'LETSENCRYPT_EMAIL=maciej@ethernode.io'],
    // Entrypoint: [ 'bin/mantis' ],
    OpenStdin: false,
    StdinOnce: false,
  }).then((container) => {
    container.inspect(async (err: any, result: { Id: string; }) => {
      if (err) {
        console.log(err);
        throw new Error(err);
      }
      const dbAddNodeInfo = await Account.updateOne({ userName }, { $push: { nodes: { nodeId: result.Id, nodeName, nodeNetwork } } }).exec();
      console.log(dbAddNodeInfo);
      docker.getContainer(result.Id).start((error, containerResult) => {
        if (err) {
          console.log(error);
          throw new Error(error);
        }
      });
    });
  }).catch((error) => {
    console.log(error);
    throw new Error(error);
  });
  return { status: "success", message: "Stuff" };
};
const dbRemoveNode = async (JWTtoken: string, userName: string, containerId: string, nodeName: string, removeNodeData: boolean): Promise<any> => {
  await docker.getContainer(containerId).remove({ force: true }, async (err, data) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    }
    if (removeNodeData === true) {
      console.log("removing node data from host");
      const dir = "/media/ssd/.multigeth/" + userName + "/" + nodeName + "/";
      exec("rm -rf " + dir, (error: any, stdout: any, stderr: any) => {
        if (error !== null) {
          console.log("exec error: " + error);
          throw new Error(error);
        }
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
      });
    }
  });
  await Account.updateOne({ userName }, { $pull: { nodes: { nodeId: containerId } } }).exec();
  return {
    status: "success",
    message: "Node Removed",
  };
};
