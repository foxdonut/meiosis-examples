import { createFeature } from "meiosis";
import { initialModel } from "./model";
import { update } from "./update";
import { view } from "./view.jsx";

const createSliderContainerFeature = config => {
  const model = config && config.initialModel || initialModel;

  const featureConfig = {
    inputs: config && config.inputs,
    initialModel: [model, null],
    update: update,
    view: view
  };

  return createFeature(featureConfig);
};

export { createSliderContainerFeature };
