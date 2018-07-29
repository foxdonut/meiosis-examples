import flyd from "flyd";
import hyperHTML from "hyperhtml/esm";

import { createTemperature } from "./temperature";

const update = flyd.stream();
const temperature = createTemperature(update);
const models = flyd.scan((model, func) => func(model),
  temperature.model(), update);

const element = document.getElementById("app");
const render = hyperHTML.bind(element);
models.map(model => render`${temperature.view(model)}`);

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ models ]});
