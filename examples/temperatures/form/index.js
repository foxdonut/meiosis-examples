import { nextAction } from "./nextAction";
import { receive as formReceive } from "./receive";

import { entry } from "../entry";
import { date } from "../date";
import { temperature } from "../temperature";

const initialModel = {
  store: {
    saved: "",
    entry: entry.initialModel(),
    date: date.initialModel(),
    temperature: {
      air: temperature.initialModel("air", "Air temperature:"),
      water: temperature.initialModel("water", "Water temperature:")
    }
  }
};

const receive = (model, proposal) => {
  model = formReceive(model, proposal);

  model.store.entry = entry.receive(model.store.entry, proposal);
  model.store.date = date.receive(model.store.date, proposal);
  model.store.temperature.air = temperature.receive(model.store.temperature.air, proposal);
  model.store.temperature.water = temperature.receive(model.store.temperature.water, proposal);

  return model;
};

export { initialModel, receive, nextAction };
