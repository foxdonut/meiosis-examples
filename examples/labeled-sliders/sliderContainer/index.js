import initialModel from "./model";
import { actions } from "./actions";
import receive from "./receive";
import view from "./view";

import { component as labeledSlider } from "../labeledSlider";

export const component = () => {
  const sliders = {};

  return {
    initialModel,
    view: view({ sliders }),
    actions,
    receive: receive(sliders)
  };
};
