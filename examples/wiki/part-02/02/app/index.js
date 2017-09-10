import { createView } from "./view";
import { createTemperature } from "../temperature";
import { createComponents, combineComponents } from "../util/nest";

export const createApp = update => {
  const components = createComponents(update, {
    air: createTemperature,
    water: createTemperature
  });

  return {
    model: combineComponents("model", components),
    view: createView(components)
  };
};
