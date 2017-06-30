import m from "mithril";
import stream from "mithril/stream";

import { app } from "./app";
import { increment } from "./increment";

const initialModel = app.model();

const update = stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

const event = stream();

increment.create(event)(update);
const view = app.create(event)(update);

const element = document.getElementById("app");
models.map(model => m.render(element, view(model)));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

trace({ update, dataStreams: [ models ], otherStreams: [ event ] });
//trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
