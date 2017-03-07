import flyd from "flyd";
import { render } from "preact";
import { applyModelChange, trace } from "meiosis";
import { mergeIntoOne, nest, scan } from "./util";
import meiosisTracer from "meiosis-tracer";

import { app } from "./app";
import { entry } from "./entry";
import { date } from "./date";
import { temperature } from "./temperature";

export const startApp = view => {
  const initialModel = {
    saved: "",
    entry: entry.initialModel(),
    date: date.initialModel(),
    temperature: {
      air: temperature.initialModel("air", "Air temperature:"),
      water: temperature.initialModel("water", "Water temperature:")
    }
  };

  const modelChanges = mergeIntoOne([
    app.modelChanges,
    nest("date", date.modelChanges),
    nest("entry", entry.modelChanges),
    nest("temperature.air", temperature.modelChanges),
    nest("temperature.water", temperature.modelChanges)
  ]);

  const model = scan(applyModelChange, initialModel, modelChanges);

  const element = document.getElementById("app");
  model.map(model => render(view(model), element, element.lastElementChild));

  trace({ streamLibrary: flyd, modelChanges, streams: [ model ] });
  meiosisTracer({ selector: "#tracer" });
};
