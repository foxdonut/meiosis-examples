import m from "mithril";
import stream from "mithril/stream";

import { createApp } from "./app";
import { createIncrement } from "./increment";

const update = stream();
const event = stream();
const app = createApp(event)(update);
const initialModel = app.model();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

createIncrement(event)(update);

const element = document.getElementById("app");
models.map(model => m.render(element, app.view(model)));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";
trace({ update, dataStreams: [ models ], otherStreams: [ event ] });
meiosisTracer({ selector: "#tracer" });
