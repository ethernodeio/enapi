import { InstallService, ListServices, ListInstalledServices, ListRunningServices, StartService } from "../__GENERATED_TYPES__/index.js";
// tslint:disable-next-line: no-var-requires
const { ServiceRunner } = require("@etclabscore/jade-service-runner-client");
// tslint:disable-next-line: no-var-requires
const ERPC = require("@etclabscore/ethereum-json-rpc");
const serviceRunner = new ServiceRunner({ transport: { type: "http", port: 8002, host: "localhost" } });

// #######################################
//          ####NODE METHODS ####
// #######################################
export const installService: InstallService = async (serviceName, serviceVersion) => {
  const installServicesResult = await serviceRunner.installService(serviceName, serviceVersion);
  return (installServicesResult);
}

export const listServices: ListServices = async (filter) => {
  const listServiceResult = await serviceRunner.listServices(filter);
  return (listServiceResult);
};

export const listInstalledServices: ListInstalledServices = async () => {
  const servicesInstalled = await serviceRunner.listServices("installed");
  return (servicesInstalled);
};

export const listRunningServices: ListRunningServices = async () => {
  const servicesRunningResult = await serviceRunner.listServices("running");
  return (servicesRunningResult);
};

export const startService: StartService = async (serviceName, serviceVersion, serviceEnv) => {
  const startServiceResult = serviceRunner.start(serviceName, serviceVersion, serviceEnv);
  return (startServiceResult);
};
