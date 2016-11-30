import uuid from "node-uuid";
import { Action } from "./actions";
import { component as sliderComponent } from "../labeledSlider";

const receive = sliders => (model, proposal) => {
  Action.case({
    AddMeasurement: () => {
      const id = uuid.v1();
      model.sliderIds.push(id);

      const slider = sliderComponent(id);
      sliders[id] = slider;
      model[id] = slider.initialModel({});
    },
    RemoveMeasurement: id => {
      delete model[id];
      delete sliders[id];
      model.sliderIds.splice(model.sliderIds.indexOf(id), 1);
    },
    UpdateMeasurement: id => {
      model[id] = sliders[id].receive(model[id], proposal);
    }
  }, proposal);

  return model;
};

export default receive;
