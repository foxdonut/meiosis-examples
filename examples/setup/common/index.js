import flyd from "flyd";

import { createTemperature } from "./temperature";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

export const setup = render => {
  const update = flyd.stream();
  const temperature = createTemperature(update);
  const initialModel = temperature.model();
  const applyUpdate = (model, modelUpdate) => modelUpdate(model);
  const models = flyd.scan(applyUpdate, initialModel, update);

  const element = document.getElementById("app");
  models.map(model => render(temperature.view(model), element));

  // Only for using Meiosis Tracer in development.
  trace({ update, dataStreams: [ models ]});
  meiosisTracer({ selector: "#tracer" });

  return { models, view: temperature.view, element };
};
