const m = require("mithril");
const stream = require("mithril/stream");

const { createApp } = require("./app");

const update = stream();
const app = createApp(update);
const models = stream.scan((model, func) => func(model),
  app.model(), update);
const states = models.map(app.state);

const element = document.getElementById("app");
states.map(state => m.render(element, app.view(state)));

// Only for using Meiosis Tracer in development.
const { trace } = require("meiosis");
const meiosisTracer = require("meiosis-tracer");
trace({ update, dataStreams: [ models, states ] });
meiosisTracer({ selector: "#tracer" });
