import { assoc, merge } from "ramda";
import { Action } from "./actions";
import { initialModel, update } from "./model";
import view from "./view.jsx";

import createLabeledSlider from "../labeledSlider/main";

const createSliderContainer = createComponent => {
  const LabeledSlider = createLabeledSlider(createComponent);

  return createComponent({
    initialModel,
    view: view(LabeledSlider),
    update: update(Action),
    pipeline: (model, update) => {
      if (parseInt(update.index, 10) >= 0) {
        model.measurements[update.index] = assoc("value", update.value, model.measurements[update.index]);
      }
      else {
        model = merge(model, update);
      }
      return model;
    }
  });
};

export default createSliderContainer;
