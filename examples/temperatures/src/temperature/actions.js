import _ from "lodash";

export const actions = update => ({
  increase: (id, amount) => evt => {
    evt.preventDefault();

    update(model => _.update(model, [id, "value"], value => value + amount));
  },

  changeUnits: id => evt => {
    evt.preventDefault();

    update(model => {
      if (model[id].units === "F") {
        return _.update(_.set(model, [id, "units"], "C"),
          [id, "value"], value => Math.round( (value - 32) / 9 * 5 ));
      }
      else {
        return _.update(_.set(model, [id, "units"], "F"),
          [id, "value"], value => Math.round( value * 9 / 5 + 32 ));
      }
    })
  }
});
