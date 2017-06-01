import m from "mithril";
import stream from "mithril/stream";

import { app } from "./app";
import { createRouter } from "./router";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

// Meiosis Setup
const initialModel = app.model();
const update = stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

// Rendering
const element = document.getElementById("app");
const view = app.create(update);
models.map(model => m.render(element, view(model)));

// Router
const router = createRouter(update);
// Resolve initial route
router.resolveRoute();
// Route sync
models.map(router.routeSync);

// Only for using Meiosis Tracer in development.
trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
