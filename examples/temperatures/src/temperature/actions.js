import _ from "lodash";

export const createActions = update => ({
  increase: amount => evt => {
    evt.preventDefault();

    update({ fn: model => _.update(model, "value", value => value + amount) });
  },

  changeUnits: evt => {
    evt.preventDefault();

    update({ fn: model => {
      if (model.units === "F") {
        return _.update(_.set(model, "units", "C"),
          "value", value => Math.round( (value - 32) / 9 * 5 ));
      }
      else {
        return _.update(_.set(model, "units", "F"),
          "value", value => Math.round( value * 9 / 5 + 32 ));
      }
    } })
  }
});
