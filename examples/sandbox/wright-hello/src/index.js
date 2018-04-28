import m from "mithril";
import stream from "mithril/stream";

import { createTemperature } from "./temperature";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const update = stream();
const temperature = createTemperature(update);
const models = stream.scan((model, func) => func(model),
  temperature.model(), update);

const element = document.getElementById("app");
models.map(model => m.render(element, temperature.view(model)));

// Only for using Meiosis Tracer in development.
trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });

// For hot module reloading
window.rerender = function() {
  m.render(element, temperature.view(models()));
};
