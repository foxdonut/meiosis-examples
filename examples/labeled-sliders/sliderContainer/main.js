import { initialModel } from "./model";
import receiveUpdate from "./receiveUpdate";
import view from "./view";

import labeledSliderConfig from "../labeledSlider/main";

const createSliderContainer = createComponent => {
  const LabeledSlider = createComponent(labeledSliderConfig);

  return createComponent({
    initialModel,
    view: view(LabeledSlider),
    receiveUpdate: receiveUpdate
  });
};

export default createSliderContainer;
