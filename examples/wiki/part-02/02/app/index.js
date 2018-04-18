import { createView } from "./view";
import { createTemperature } from "../temperature";
import { nest } from "../util/nest";

export const createApp = update => {
  const air = nest(createTemperature, "air", update);
  const water = nest(createTemperature, "water", update);

  return {
    model: () => Object.assign(air.model(), water.model()),
    view: createView({air, water})
  };
};
