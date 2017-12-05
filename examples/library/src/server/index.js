/* global process */
"use strict";

const Hapi = require("hapi");
const Inert = require("inert");
const Sqlite3 = require("sqlite3");

const routes = require("./routes");

const server = new Hapi.Server();
const port = process.env.PORT || 8000;
server.connection({ host: "localhost", port });

const db = new Sqlite3.Database("./library.db");
server.bind({ db });

server.register(Inert, function(err) {
  if (err) {
    throw err;
  }
})

server.route(routes);

// eslint-disable-next-line no-console
server.start(() => console.log("Server running on", server.info.uri));
