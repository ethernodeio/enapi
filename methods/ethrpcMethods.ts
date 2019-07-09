import { Web3ClientVersion } from "../__GENERATED_TYPES__/index.js";

// tslint:disable-next-line: variable-name
export const web3_clientVersion: Web3ClientVersion = async (userName, nodeName, nodeNetwork, method, params) => {
  const getRpc = await makeRPCcall(userName, nodeName, nodeNetwork, method, params);
  console.log("Web3 info:", getRpc);
  return getRpc;
};

// tslint:disable-next-line: max-line-length
const makeRPCcall = (userName: string, nodeName: string, nodeNetwork: string, method: string, params: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve({
      rpcCall: "client is gay",
    });
  });
};
