import { Action } from "./actions";
import { update } from "./model";
import view from "./view.jsx";

const createLabeledSlider = createComponent => createComponent({
  update: update(Action),
  view
});

export default createLabeledSlider;

