import { GetSysInfo } from "../__GENERATED_TYPES__/index.js";
import os from "os";
import { checkJWT } from "../middleware/checkauth";
console.log("enAPI Ready to start Blockchain Nodes");

// #######################################
//          ####SYSTEM METHODS ####
// #######################################
export const getSysInfo: GetSysInfo = async (JWTtoken) => {
  await checkJWT(JWTtoken);
  const cpu = await os.arch();
  const ram = await os.totalmem();
  const freeram = await os.freemem();
  const hostname = await os.hostname();
  const loadavg = await os.loadavg();
  const networkif = await os.networkInterfaces();
  return {
    cpu,
    ram,
    freeram,
    hostname,
    loadavg,
    networkif,
  };
};
