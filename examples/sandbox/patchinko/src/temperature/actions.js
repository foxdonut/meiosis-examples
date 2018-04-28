import { O } from "../util/overloaded";

const add = x => y => x + y;

export const createActions = update => ({
  increase: amount => evt => {
    evt.preventDefault();
    update({ value: O(add(amount)) });
  },

  changeUnits: evt => {
    evt.preventDefault();

    update(model => O(model,
      (model.units === "F")
        ? {
          units: "C",
          value: Math.round( (model.value - 32) / 9 * 5 )
        }
        : {
          units: "F",
          value: Math.round( model.value * 9 / 5 + 32 )
        }
    ));
  }
});
