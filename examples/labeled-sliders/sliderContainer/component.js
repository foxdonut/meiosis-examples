import { Action } from "./actions";
import { Action as SliderAction } from "../labeledSlider";
import { component as sliderComponent } from "../labeledSlider";

const initialModel = {
  sliderIds: [],
  slidersById: {}
};

const receive = (model, proposal) => {
  Action.case({
    AddMeasurement: () => {
      const sliderModel = sliderComponent.initialModel();
      model.sliderIds.push(sliderModel.id);
      model.slidersById[sliderModel.id] = sliderModel;
    },
    RemoveMeasurement: id => {
      delete model.slidersById[id];
      model.sliderIds.splice(model.sliderIds.indexOf(id), 1);
    }
  }, proposal);

  SliderAction.case({
    UpdateMeasurement: () => {
      model.sliderIds.forEach(id => sliderComponent.receive(model.slidersById[id], proposal));
    }
  }, proposal);

  return model;
};

export const component = {
  initialModel,
  receive
};
