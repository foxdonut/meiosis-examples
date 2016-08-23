import Action from "./actions";

const receive = (model, proposal) => {
  Action.case({
    Save: save => {
      const air = save.store.airTemperature;
      const water = save.store.waterTemperature;

      model.store.saved = `Entry #${save.store.entry.value} on ${save.store.date.value}:
        Air: ${air.temperature} \xB0${air.units}
        Water: ${water.temperature} \xB0${water.units}
      `;

      model.store.entry.value = "";
      model.store.date.value = "";
    },
    _: () => {}
  }, proposal);

  return model;
};

export default receive;
