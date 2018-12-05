import _ from "lodash";
import { validateModel } from "../validation";

export const actions = update => ({
  editValue: id => evt => update(model => _.set(model, [id, "value"], evt.target.value)),
  save: evt => {
    evt.preventDefault();

    update(model => {
      const errors = validateModel(model);
      model.errors = errors;

      if (_.isEmpty(errors)) {
        const air = model["temperature:air"];
        const water = model["temperature:water"];

        model.saved =
          "Entry #" + model["entry:number"].value +
          " from " + model["entry:date:from"].value +
          " to " + model["entry:date:to"].value + ":" +
          " Air: " + air.value + "\xB0" + air.units +
          " Water: " + water.value + "\xB0" + water.units;

        model["entry:date:from"].value = "";
        model["entry:date:to"].value = "";
        model["entry:number"].value = "";
      }
      return model;
    });
  }
});
