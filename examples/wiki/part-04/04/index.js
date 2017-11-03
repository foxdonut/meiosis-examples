import flyd from "flyd";
import ReactDOM from "react-dom";

import { createNavigation } from "./navigation";
import { createAppModel, createApp } from "./app";
import { createRouter } from "./router";

// Meiosis Setup
const update = flyd.stream();
const initialModel = createAppModel();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const action = flyd.stream();
action.map(fn => fn(models()));

const navigation = createNavigation(update, action);
const router = createRouter(navigation);
const app = createApp(update, navigation, router);

// Rendering
const element = document.getElementById("app");
models.map(model => ReactDOM.render(app.view(model), element));

// Resolve initial route
router.resolveRoute();
// Route sync
models.map(router.routeSync);

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";
trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
