const m = require("mithril");
const stream = require("mithril/stream");

const { createApp } = require("./app");

const update = stream();
const app = createApp(update);
const models = stream.scan((model, modelUpdate) => modelUpdate.fn(model),
  app.model(), update);

const element = document.getElementById("app");
models.map(model => m.render(element, app.view(model)));

// Only for using Meiosis Tracer in development.
const { trace } = require("meiosis");
const meiosisTracer = require("meiosis-tracer");
trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
