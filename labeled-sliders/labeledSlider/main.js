import { Action } from "./actions";
import { transform } from "./model";
import view from "./view";

const createLabeledSlider = createComponent => createComponent({
  transform: transform(Action),
  view
});

export default createLabeledSlider;

