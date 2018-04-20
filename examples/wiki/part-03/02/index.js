/* global ReactDOM */
import flyd from "flyd";

import { createApp } from "./app";

const update = flyd.stream();
const app = createApp(update);
const models = flyd.scan((model, func) => func(model),
  app.model(), update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(app.view(model), element));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
import meiosisTracer from "meiosis-tracer";
meiosisTracer({ selector: "#tracer" });