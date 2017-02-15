import flyd from "flyd";
import { render } from "preact";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";
import { mergeIntoOne, nest, scan } from "../util";
import { nextAction } from "./nextAction";
import { receive as formReceive } from "./receive";

import { entry } from "../entry";
import { date } from "../date";
import { temperature } from "../temperature";

export const app = view => {
  const initialModel = {
    saved: "",
    entry: entry.initialModel(),
    date: date.initialModel(),
    temperature: {
      air: temperature.initialModel("air", "Air temperature:"),
      water: temperature.initialModel("water", "Water temperature:")
    }
  };

  const receive = (model, proposal) => {
    model = formReceive(model, proposal);

    model.entry = entry.receive(model.entry, proposal);
    model.date = date.receive(model.date, proposal);
    model.temperature.air = temperature.receive(model.temperature.air, proposal);
    model.temperature.water = temperature.receive(model.temperature.water, proposal);

    return model;
  };

  const modelChanges = mergeIntoOne([
    nest("date", date.modelChanges)
  ]);

  const model = scan(applyModelChange, initialModel, modelChanges);

  const element = document.getElementById("app");
  model.map(model => render(view(model), element, element.lastElementChild));

  trace({ streamLibrary: flyd, modelChanges, streams: [ model ] });
  meiosisTracer({ selector: "#tracer" });
};
