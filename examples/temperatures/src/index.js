import flyd from "flyd";
import { render } from "preact";
import _ from "lodash";

import { createApp } from "./app";

const update = flyd.stream();
const app = createApp(update);
const models = flyd.scan((model, modelUpdate) => {
  if (modelUpdate.fn) {
    model = modelUpdate.fn(model);
  }
  if (modelUpdate.errors) {
    _.update(model, ["errors"], modelUpdate.errors);
  }
  return model;
}, app.model(), update);

const element = document.getElementById("app");
models.map(model => render(app.view(model), element, element.lastElementChild));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";
trace({ update, dataStreams: [ models ], toUpdate: state => ({ fn: () => state }) });
meiosisTracer({ selector: "#tracer" });
