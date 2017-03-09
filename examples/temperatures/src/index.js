import flyd from "flyd";
import { render } from "preact";
import objectPath from "object-path";
import { trace } from "meiosis";
import { scan } from "./util";
import meiosisTracer from "meiosis-tracer";

import { entry } from "./entry";
import { date } from "./date";
import { temperature } from "./temperature";

export const startApp = view => {
  const initialModel = {
    saved: "",
    entry: entry.initialModel(),
    date: date.initialModel(),
    temperature: {
      air: temperature.initialModel("Air temperature:"),
      water: temperature.initialModel("Water temperature:")
    }
  };

  const modelChanges = flyd.stream();

  const actions = {
    app: modelChanges,
    date: model => modelChanges({ path: "date", model }),
    entry: model => modelChanges({ path: "entry", model }),
    temperature: {
      air: model => modelChanges({ path: "temperature.air", model }),
      water: model => modelChanges({ path: "temperature.water", model })
    }
  };

  const updateModel = (model, modelChange) => {
    objectPath.set(model, modelChange.path, modelChange.model);
    return model;
  };

  const model = scan(updateModel, initialModel, modelChanges);

  const element = document.getElementById("app");
  model.map(model => render(view(model, actions), element, element.lastElementChild));

  trace({ streamLibrary: flyd, modelChanges, streams: [ model ] });
  meiosisTracer({ selector: "#tracer" });
};
