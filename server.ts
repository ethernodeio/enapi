import { Server, IServerOptions } from "@open-rpc/server-js";
import { Router } from "@open-rpc/server-js";
import { OpenRPC } from "@open-rpc/meta-schema";
import { IHTTPServerTransportOptions } from "@open-rpc/server-js/build/transports/http";
import { IWebSocketServerTransportOptions } from "@open-rpc/server-js/build/transports/websocket";
import openrpcDocument from "./openrpc.json";
import { createUser, login, getUser } from "./methods/accountMethods";
import { addNode, removeNode, getNodeContainerInfo } from "./methods/nodeMethods";
import { sol_compile } from "./methods/solidityMethods";
import { web3_clientVersion } from "./methods/ethrpcMethods";
import mongoose from "mongoose";

console.log(mongoose.connect("mongodb://localhost/enos", { useNewUrlParser: true }));

const methods = {
  createUser,
  login,
  getUser,
  addNode,
  removeNode,
  getNodeContainerInfo,
  sol_compile,
  web3_clientVersion,
};

const router = new Router(openrpcDocument as any, methods);

const options = {
  methodMapping: methods,
  router,
  transportConfigs: [
    {
      type: "HTTPTransport",
      options: { port: 8080, middleware: [] } as IHTTPServerTransportOptions,
    },
    {
      type: "HTTPTransport",
      options: { port: 8081, middleware: [] } as IHTTPServerTransportOptions,
    },
    {
      type: "WebSocketTransport",
      options: { port: 8005, middleware: [] } as IWebSocketServerTransportOptions,
    },
  ],
  openrpcDocument: openrpcDocument as any,
} as IServerOptions;

const server = new Server(options);

server.start();
