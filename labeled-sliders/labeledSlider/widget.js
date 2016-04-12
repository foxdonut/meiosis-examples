import { initialModel } from "./model";
import { update } from "./update";
import { view } from "./view.jsx";

const createLabeledSliderWidget = (id, actions, model) => {
  const widget = {
    id: id,
    model: model || initialModel,
    update: update,
    view: view(actions)
  };

  return widget;
};

export { createLabeledSliderWidget };
