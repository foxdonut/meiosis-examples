import { initialModel } from "./model";
import { update } from "./update";
import { view } from "./view.jsx";

const createLabeledSliderWidget = id => {
  const widget = {
    id: id,
    initialModel: [initialModel],
    update: update,
    view: view
  };

  return widget;
};

export { createLabeledSliderWidget };
