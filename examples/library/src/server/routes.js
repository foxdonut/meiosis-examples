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
  },
  { method: "GET",
    path: "/api/operations",
    handler: Handlers.findAllOperations
  },
  { method: "GET",
    path: "/api/problems",
    handler: Handlers.findAllProblems
  }
];
