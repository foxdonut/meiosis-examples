import { initialModel } from "./model";
import receive from "./receive";
import view from "./view";

import { component as labeledSlider } from "../labeledSlider";

export const component = () => {
  const LabeledSlider = createLabeledSlider();

  return {
    initialModel,
    view: view(LabeledSlider),
    receive
  };
};
