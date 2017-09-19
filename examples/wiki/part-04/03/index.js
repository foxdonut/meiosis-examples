import m from "mithril";
import stream from "mithril/stream";

import { createNavigation } from "./navigation";
import { createApp } from "./app";
import { createRouter } from "./router";

// Meiosis Setup
const update = stream();
const navigation = createNavigation(update);
const app = createApp(update, navigation);
const initialModel = app.model();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

// Rendering
const element = document.getElementById("app");
models.map(model => m.render(element, app.view(model)));

// Router
const router = createRouter(navigation);
// Route sync
models.map(router.routeSync);

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";
trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
