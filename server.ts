import { Server, IServerOptions } from "@open-rpc/server-js";
import openrpcDocument from "./openrpc.json"
import { Router } from "@open-rpc/server-js";
import { OpenRPC } from "@open-rpc/meta-schema";
import { IHTTPServerTransportOptions } from "@open-rpc/server-js/build/transports/http";
import { ResponseStatus, CreateUser } from "./__GENERATED_TYPES__/index.js";
import { IWebSocketServerTransportOptions } from "@open-rpc/server-js/build/transports/websocket";


const createUser: CreateUser = async (userName, password, userRole) => {
  const user = await dbCreateUser(userName, password);
  console.log('user', user);
  return user;
}

const dbCreateUser = (userName: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve({ userName })
    }, 5000);

  });
}

const methods = {
  createUser
};

const router = new Router(openrpcDocument as OpenRPC, methods);

const options = {
  methodMapping: methods,
  router,
  transportConfigs: [
    {
      type: "HTTPTransport",
      options: { port: 8080, middleware: [] } as IHTTPServerTransportOptions,
    },
    {
      type: "WebSocketTransport",
      options: { port: 8005, middleware: [] } as IWebSocketServerTransportOptions,
    },
  ],
  openrpcDocument: openrpcDocument as OpenRPC,
} as IServerOptions;

const server = new Server(options);

console.log(server.start());