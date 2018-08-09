import flyd from "flyd";
import { render } from "lit-html/lib/lit-extended";

import { createApp } from "./app";

const update = flyd.stream();
const app = createApp(update);

const models = flyd.scan((model, func) => func(model),
  app.model(), update);

const element = document.getElementById("app");
const states = models.map(app.state);
states.map(state => render(app.view(state), element));

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer";
meiosisTracer({ selector: "#tracer", streams: [ models, states ]});
