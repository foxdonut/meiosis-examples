import { Action } from "./actions";
import { initialModel, update } from "./model";
import view from "./view.jsx";

import createLabeledSlider from "../labeledSlider/main";

const createSliderContainer = createComponent => {
  const LabeledSlider = createLabeledSlider(createComponent);

  return createComponent({
    initialModel,
    update: update(Action),
    view: view(LabeledSlider)
  });
};

export default createSliderContainer;
