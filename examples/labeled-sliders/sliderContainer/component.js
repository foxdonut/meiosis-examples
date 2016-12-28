import { nestComponent, componentContainer } from "meiosis";
import uuid from "uuid";
import { Action } from "./actions";
import { component as sliderComponent } from "../labeledSlider";

const initialModel = () => ({
  sliderIds: [],
  slidersById: {}
});

const componentsById = {};
const getComponentById = id => {
  let componentById = componentsById[id];

  if (!componentById) {
    componentById = nestComponent({ component: sliderComponent(id), path: "slidersById." + id });
    componentsById[id] = componentById;
  }
  return componentById;
};

const receive = (model, proposal) => {
  Action.case({
    AddMeasurement: () => {
      const id = uuid.v1();
      model.sliderIds.push(id);
      model.slidersById[id] = getComponentById(id).initialModel({});
    },
    RemoveMeasurement: id => {
      delete model.slidersById[id];
      model.sliderIds.splice(model.sliderIds.indexOf(id), 1);
    }
  }, proposal);

  return model;
};

export const component = componentContainer({
  component: {
    initialModel,
    receive
  },
  getComponents: model => model.sliderIds.map(getComponentById)
});
