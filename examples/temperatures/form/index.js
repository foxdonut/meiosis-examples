import { nextAction } from "./nextAction";
import { receive as formReceive } from "./receive";

import { entry } from "../entry";
import { date } from "../date";
//import temperature from "../temperature";

const initialModel = {
  store: {
    saved: "",
    entry: entry.initialModel(),
    date: date.initialModel()
  }
};

/*
const airTemperature = nestTemperatureComponent("store.temperature.air", "t1", "Air temperature:");
const waterTemperature = nestTemperatureComponent("store.temperature.water", "t2", "Water temperature:");
*/

const receive = (model, proposal) => {
  model = formReceive(model, proposal);
  model.store.entry = entry.receive(model.store.entry, proposal);
  model.store.date = date.receive(model.store.date, proposal);

  return model;
};

export { initialModel, receive, nextAction };
