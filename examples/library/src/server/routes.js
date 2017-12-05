"use strict";

const Handlers = require("./handlers");

module.exports = [
  { method: "GET",
    path: "/{filename*}",
    handler: Handlers.staticFile
  },
  { method: "GET",
    path: "/api/books",
    handler: Handlers.findAllBooks
  }
];
