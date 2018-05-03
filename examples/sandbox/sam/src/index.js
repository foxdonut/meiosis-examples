import flyd from "flyd";
import { render } from "lit-html/lib/lit-extended";

import { createTemperature } from "./temperature";

const update = flyd.stream();
const app = createTemperature(update);

const models = flyd.scan((model, func) => func(model),
  app.model(), update);

const element = document.getElementById("app");
const states = models.map(app.state);
states.map(state => render(app.view(state), element));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

trace({ update, dataStreams: [ models, states ]});
meiosisTracer({ selector: "#tracer" });