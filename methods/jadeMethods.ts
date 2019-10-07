import { InstallService, ListServices, ListInstalledServices, ListRunningServices, StartService } from "../__GENERATED_TYPES__/index.js";
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
    return (successful);
  }
};

export const listServices: ListServices = async (filter) => {
  const slistServiceResult = await serviceRunner.listServices(filter);
  return (slistServiceResult);
};

export const listInstalledServices: ListInstalledServices = async () => {
  const servicesInstalled = await serviceRunner.listServices("installed");
  return (servicesInstalled);
};

export const listRunningServices: ListRunningServices = async () => {
  const servicesRunningResult = await serviceRunner.listServices("running");
  return (servicesRunningResult);
};

export const startService: StartService = async (serviceName, serviceEnv) => {
  const startServiceResult = serviceRunner.start(serviceName, serviceEnv);
  return (startServiceResult);
};
