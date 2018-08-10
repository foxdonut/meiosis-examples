"use strict";

const { methods, serve } = require("paperplane");
const Handlers = require("./handlers");

module.exports = {
  "/api/books": methods({
    GET: Handlers.findAllBooks
  }),
  "/api/operations": methods({
    GET: Handlers.findAllOperations
  }),
  "/api/problems": methods({
    GET: Handlers.findAllProblems
  }),
  "/": methods({
    GET: Handlers.root
  }),
  "/:path+": serve({ root: "public" })
};
