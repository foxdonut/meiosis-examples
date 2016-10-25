import * as Hapi from "hapi";
const inert = require("inert");
import * as fs from "fs";
import { Database } from "sql.js";

import { addBookRoutes } from "./book";

const server: Hapi.Server = new Hapi.Server();

function start(port: number): void {
  const fb: Buffer = fs.readFileSync("./src/server/library.db");
  const db: Database = new Database(fb);

  server.connection({ port: port });

  server.register(inert, function(err) {
    if (err) {
      throw err;
    }
    addBookRoutes(server, db);

    server.route({
      method: "GET",
      path: "/{file*}",
      handler: {
        directory: {
          path: "../.."
        }
      }
    });

    server.route({
      method: "GET",
      path: "/examples/library/{file*}",
      handler: function(request: Hapi.Request, reply: Hapi.IReply) {
        try {
          const file = "./" + request.params["file"];
          fs.statSync(file);
          reply.file(file);
        }
        catch (err) {
          reply.file("./index-react.html");
        }
      }
    });
  });

  server.start(function(err) {
    if (err) {
      throw err;
    }
  });
}

export { start };
