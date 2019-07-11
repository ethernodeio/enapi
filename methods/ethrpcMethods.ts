import { Web3ClientVersion, NetVersion } from "../__GENERATED_TYPES__/index.js";
import net from "net";

// #######################################
//       ####ETH RPC METHODS ####
// #######################################
export const web3_clientVersion = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "web3_clientVersion", params);
  return getRpc;
};
export const web3_sha3 = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, " web3_sha3", params);
  return getRpc;
};
export const net_listening = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "net_listening", params);
  return getRpc;
};
export const net_peerCount = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "net_peerCount", params);
  return getRpc;
};
export const net_version = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "net_version", params);
  return getRpc;
};
export const eth_blockNUmber = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_blockNUmber", params);
  return getRpc;
};
export const eth_call = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_call", params);
  return getRpc;
};
export const eth_chainId = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_chainId", params);
  return getRpc;
};
export const eth_coinbase = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_coinbase", params);
  return getRpc;
};
export const eth_estimateGas = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_estimateGas", params);
  return getRpc;
};
export const eth_gasPrice = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_gasPrice", params);
  return getRpc;
};
export const eth_getBalance = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getBalance", params);
  return getRpc;
};
export const eth_getBlockByHash = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getBalance", params);
  return getRpc;
};
export const eth_getBlockByNumber = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getBlockByNumber", params);
  return getRpc;
};
export const eth_getBlockTransactionCountByHash = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getBlockTransactionCountByHash", params);
  return getRpc;
};
export const eth_getBlockTransactionCountByNumber = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getBlockTransactionCountByNumber", params);
  return getRpc;
};
export const eth_getCode = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getCode", params);
  return getRpc;
};
export const eth_getFilterChanges = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getFilterChanges", params);
  return getRpc;
};
export const eth_getFilterLogs = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getFilterLogs", params);
  return getRpc;
};
export const eth_getRawTransactionByHash = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getRawTransactionByHash", params);
  return getRpc;
};
export const eth_getRawTransactionByBlockHashAndIndex = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getRawTransactionByBlockHashAndIndex", params);
  return getRpc;
};
export const eth_getRawTransactionByBlockNumberAndIndex = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getRawTransactionByBlockNumberAndIndex", params);
  return getRpc;
};
export const eth_getLogs = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getLogs", params);
  return getRpc;
};
export const eth_getLogs = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getLogs", params);
  return getRpc;
};
export const eth_getStorageAt = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getStorageAt", params);
  return getRpc;
};
export const eth_getTransactionByBlockHashAndIndex = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getTransactionByBlockHashAndIndex", params);
  return getRpc;
};
export const eth_getTransactionByBlockNumberAndIndex = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getTransactionByBlockNumberAndIndex", params);
  return getRpc;
};
export const eth_getTransactionByHash = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getTransactionByHash", params);
  return getRpc;
};
export const eth_getTransactionCount = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getTransactionCount", params);
  return getRpc;
};
export const eth_getTransactionReceipt = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getTransactionReceipt", params);
  return getRpc;
};
export const eth_getUncleByBlockHashAndIndex = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getUncleByBlockHashAndIndex", params);
  return getRpc;
};
export const eth_getUncleByBlockNumberAndIndex = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getUncleByBlockNumberAndIndex", params);
  return getRpc;
};
export const eth_getUncleCountByBlockHash = async (userName: string, nodeName: string, nodeNetwork: string, params: any) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, "eth_getUncleCountByBlockHash", params);
  return getRpc;
};
// #######################################
//    ####IPC Client for MultiGeth ####
// #######################################
// tslint:disable-next-line: max-line-length
const makeRPCcall = (userName: string, nodeName: string, nodeNetwork: string, method: string, params: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    const client = net.createConnection({ path: "/media/ssd/.multigeth/" + userName + "/" + nodeName + "/" + nodeNetwork + "/geth.ipc" }, () => {
      // 'connect' listener
      console.log("Connected to node " + nodeName);
    });
    var obj = {
      jsonrpc: "2.0",
      method,
      params: [...params],
      id: 42,
    };
    client.write(JSON.stringify(obj), () => {
      console.log("Call to node made.");
    });
    client.on("data", (data: string) => {
      let dataparsed = JSON.parse(data);
      console.log("Data method: " + method + " : " + dataparsed.result);
      resolve(
        dataparsed.result,
      );
      client.end();
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
