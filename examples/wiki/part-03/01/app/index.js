import { createView } from "./view";
import { createTemperature } from "../temperature";
import { nest } from "../util/nest";

export const createApp = update => {
  const air = nest(createTemperature, update, ["air"]);
  const water = nest(createTemperature, update, ["water"]);

  return {
    model: () => Object.assign({}, air.model(), water.model()),
    view: createView({ air, water })
  };
};
