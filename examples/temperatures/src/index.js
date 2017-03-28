import flyd from "flyd";
import { render } from "preact";
import { fromJS } from "immutable";
import { applyUpdate, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

import { entry } from "./entry";
import { date } from "./date";
import { temperature } from "./temperature";

export const startApp = createView => {
  const initialModel = fromJS({
    saved: "",
    entry: entry.initialModel(),
    date: date.initialModel(),
    temperature: {
      air: temperature.initialModel("Air temperature:"),
      water: temperature.initialModel("Water temperature:")
    }
  });

  const update = flyd.stream();
  const model = flyd.scan(applyUpdate, initialModel, update);
  const view = createView(update);

  const element = document.getElementById("app");
  const modeljs = model.map(model => model.toJS());
  modeljs.map(modeljs => render(view(modeljs), element, element.lastElementChild));

  trace({ update, dataStreams: [ modeljs ] });
  meiosisTracer({ selector: "#tracer" });
};
