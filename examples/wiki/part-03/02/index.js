/* global ReactDOM */
import flyd from "flyd";

import { createApp } from "./app";

const update = flyd.stream();
const app = createApp(update);
const initialModel = app.model();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(app.view(model), element));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
import meiosisTracer from "meiosis-tracer";
meiosisTracer({ selector: "#tracer" });