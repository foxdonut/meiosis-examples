import flyd from "flyd";
import ReactDOM from "react-dom";

import { app } from "./02/app";
import { createRouter } from "./03/router";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

// Meiosis Setup
const initialModel = app.model();
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

// Rendering
const element = document.getElementById("app");
const view = app.create(update);
models.map(model => ReactDOM.render(view(model), element));

// Router
const router = createRouter(update);
// Resolve initial route
router.resolveRoute();

// Only for using Meiosis Tracer in development.
trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
