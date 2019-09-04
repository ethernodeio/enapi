import { EthRpcCall } from "../__GENERATED_TYPES__/index.js";
import net from "net";

// #######################################
//       ####ETH RPC METHODS ####
// #######################################
export const ethRpcCall: EthRpcCall = async (userName, nodeName, nodeNetwork, web3callMethod, web3callParams, rpcId) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, web3callMethod, web3callParams, rpcId);
  return getRpc;
};

// #######################################
//    ####IPC Client for MultiGeth ####
// #######################################
// tslint:disable-next-line: max-line-length
const makeRPCcall = async (userName: string, nodeName: string, nodeNetwork: string, web3callMethod: string, web3callParams: any[], rpcId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const client = net.createConnection({ path: "/media/ssd/.multigeth/" + userName + "/" + nodeName + "/" + nodeNetwork + "/geth.ipc" }, () => {
      // 'connect' listener
      console.log("Connected to node " + nodeName);
    });
    const obj = {
      jsonrpc: "2.0",
      method: web3callMethod,
      params: [...web3callParams],
      id: rpcId,
    };
    client.write(JSON.stringify(obj), () => {
      console.log("Call to node made.");
    });
    client.on("data", (data: any) => {
      const result = JSON.parse(data);
      resolve(result);
      console.log(result);
      // client.end();
    });
    client.on("end", () => {
      console.log("Disconnected from node.");
    });
    client.on("error", (err: string) => {
      console.log("json rpc call can has error: " + err);
      return ("erorr");
    });
  });
};
