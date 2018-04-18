/* global ReactDOM */
import flyd from "flyd";

import { createTemperature } from "./temperature";

const update = flyd.stream();
const temperature = createTemperature(update);
const models = flyd.scan((model, func) => func(model),
  temperature.model(), update);

const element = document.getElementById("app");
models.map(model => ReactDOM.render(temperature.view(model), element));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
import meiosisTracer from "meiosis-tracer";
meiosisTracer({ selector: "#tracer" });
