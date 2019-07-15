import { Iotcall } from "../__GENERATED_TYPES__/index.js";
import net from "net";
import { Int32 } from "bson";

// #######################################
//       ####IoT RPC METHODS ####
// #######################################
export const iotcall: Iotcall = async (userName, nodeName, nodeNetwork, iotcallMethod, itocallParams, rpcId) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, iotcallMethod, itocallParams, rpcId);
  return getRpc;
};

// #######################################
//    ####IPC Client for MultiGeth ####
// #######################################
// tslint:disable-next-line: max-line-length
const makeRPCcall = (userName: string, nodeName: string, nodeNetwork: string, iotcallMethod: string, iotcallParams: any[], rpcId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const client = net.createConnection({ path: "/media/ssd/.multigeth/" + userName + "/" + nodeName + "/" + nodeNetwork + "/geth.ipc" }, () => {
      // 'connect' listener
      console.log("Connected to node " + nodeName);
    });
    var obj = {
      jsonrpc: "2.0",
      iotcallMethod,
      params: [...iotcallParams],
      id: rpcId,
    };
    client.write(JSON.stringify(obj), () => {
      console.log("Call to node made.");
    });
    client.on("data", (data: any) => {
      let result = JSON.parse(data);
      resolve(result.result);
      console.log(result.result);
      if (result.params) {
        console.log("WE CAN HAS A NEW IoT MESSAGE");
      }
      console.log("sub response:" + JSON.stringify(result));

      console.log("Writing IoT data to blockchain on Node Client: " + nodeName);

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
