/* global process */
"use strict";

const http = require("http");
const { logger, mount, routes } = require("paperplane");

const app = routes(require("./routes"));

const port = process.env.PORT || 8000;
// eslint-disable-next-line no-console
http.createServer(mount(app, { errLogger: logger, logger })).listen(port, logger);
