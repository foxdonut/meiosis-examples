import Action from "./actions";

const receive = (model, proposal) => {
  Action.case({
    Save: save => {
      const air = save.store.airTemperature;
      const water = save.store.waterTemperature;

      model.store.saved = `On ${save.store.date.value}:
        Air: ${air.temperature} \xB0${air.units}
        Water: ${water.temperature} \xB0${water.units}
      `;

      model.store.date.value = "";
    },
    _: () => {}
  }, proposal);

  return model;
};

export default receive;
