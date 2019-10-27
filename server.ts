import { Server, IServerOptions } from "@open-rpc/server-js";
import { Router } from "@open-rpc/server-js";
import { IHTTPServerTransportOptions } from "@open-rpc/server-js/build/transports/http";
import { IWebSocketServerTransportOptions } from "@open-rpc/server-js/build/transports/websocket";
import openrpcDocument from "./openrpc.json";
import { createUser, deleteUser, login, getUser } from "./methods/accountMethods";
import { addNode, removeNode, getNodeContainerInfo } from "./methods/nodeMethods";
import { sol_compile } from "./methods/solidityMethods";
import { ethRpcCall } from "./methods/ethrpcMethods";
import { installService, listServices, listInstalledServices, listRunningServices, startService } from "./methods/jadeMethods";
import { getSysInfo } from "./methods/sysMethods";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/enapi", { useNewUrlParser: true });

const methods = {
  createUser,
  deleteUser,
  login,
  getUser,
  addNode,
  removeNode,
  getNodeContainerInfo,
  sol_compile,
  ethRpcCall,
  installService,
  listServices,
  listInstalledServices,
  listRunningServices,
  startService,
  getSysInfo,
};

const router = new Router(openrpcDocument as any, methods);

const options = {
  methodMapping: methods,
  router,
  transportConfigs: [
    {
      type: "HTTPTransport",
      options: { port: 8420, middleware: [] } as IHTTPServerTransportOptions,
    },
    {
      type: "WebSocketTransport",
      options: { port: 8421, middleware: [] } as IWebSocketServerTransportOptions,
    },
  ],
  openrpcDocument: openrpcDocument as any,
} as IServerOptions;

const server = new Server(options);

server.start();
