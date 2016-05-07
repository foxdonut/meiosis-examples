import { initialModel } from "./model";
import receiveUpdate from "./receiveUpdate";
import view from "./view";

import createLabeledSlider from "../labeledSlider/main";

const createSliderContainer = createComponent => {
  const LabeledSlider = createLabeledSlider(createComponent);

  return createComponent({
    initialModel,
    view: view(LabeledSlider),
    receiveUpdate: receiveUpdate
  });
};

export default createSliderContainer;
