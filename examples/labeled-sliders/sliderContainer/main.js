import { createComponent } from "meiosis";
import { initialModel } from "./model";
import receive from "./receive";
import view from "./view";

import createLabeledSlider from "../labeledSlider/main";

const createSliderContainer = () => {
  const LabeledSlider = createLabeledSlider();

  return createComponent({
    initialModel,
    view: view(LabeledSlider),
    receive: receive
  });
};

export default createSliderContainer;
