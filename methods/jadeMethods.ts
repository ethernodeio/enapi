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
  const servicesAvailable = await serviceRunner.listServices("available");
  const servicesRunning = await serviceRunner.listServices("running");
  const servicesInstalled = await serviceRunner.listServices("installed");
  return ({
    "Services Availabe": servicesAvailable,
    "Services Running": servicesRunning,
    "Services Installed": servicesInstalled,
  });
};

export const listInstalledServices = async () => {
  const servicesInstalled = await serviceRunner.listServices("installed");
  return (servicesInstalled);
};

export const listRunningServices = async () => {
  const servicesRunning = await serviceRunner.listServices("running");
  return ("servicesRunning");
};

export const startService = async () => {
  const serviceName = "multi-geth";
  const serviceConfig = serviceRunner.start(serviceName, "kotti");
  const erpc = new ERPC(serviceConfig);
};
