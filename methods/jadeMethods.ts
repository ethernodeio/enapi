import { } from "../__GENERATED_TYPES__/index.js";
import { JSONRPCError } from "@open-rpc/server-js";
// tslint:disable-next-line: no-var-requires
const { ServiceRunner } = require("@etclabscore/jade-service-runner-client");
// tslint:disable-next-line: no-var-requires
const ERPC = require("@etclabscore/ethereum-json-rpc");
const serviceRunner = new ServiceRunner({ transport: { type: "http", port: 8002, host: "localhost" } });

// #######################################
//          ####NODE METHODS ####
// #######################################
export const installService = async () => {
  const serviceName = "multi-geth";
  const successful = await serviceRunner.installService(serviceName);
  if (successful === false) {
    throw new JSONRPCError("error: ", 420, "Service not installed");
  } else {
    return successful;
  }
};

export const listServices = async () => {
  return ("Listing Services");
};

export const listInstalledServices = async () => {
  return ("Installed Services");
};

export const listRunningServices = async () => {
  return ("listing running services");
};

export const startService = async () => {
  const serviceName = "multi-geth";
  const serviceConfig = serviceRunner.start(serviceName, "kotti");
  const erpc = new ERPC(serviceConfig);
};
