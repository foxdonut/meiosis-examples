import { initialModel } from "./model";
import receive from "./receive";
import view from "./view";

import labeledSliderConfig from "../labeledSlider/main";

const createSliderContainer = createComponent => {
  const LabeledSlider = createComponent(labeledSliderConfig);

  return createComponent({
    initialModel,
    view: view(LabeledSlider),
    receive: receive
  });
};

export default createSliderContainer;
