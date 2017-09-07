import { createView } from "./view";
import { createTemperature } from "../temperature";
import { nest } from "../util/nest";

export const createApp = update => {
  const components = {
    air: createTemperature(nest(update, "air")),
    water: createTemperature(nest(update, "water"))
  };

  return {
    model: () => ({
      air: components.air.model(),
      water: components.air.model()
    }),
    view: createView(components)
  };
};
