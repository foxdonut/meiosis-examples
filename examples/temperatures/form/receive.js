const receive = (model, proposal) => {
  proposal.case({
    Save: save => {
      const air = save.store.temperature.air;
      const water = save.store.temperature.water;

      model.store.saved = "Entry #" + save.store.entry.value + " on " + save.store.date.value + ":" +
        " Air: " + air.value + " \xB0" + air.units +
        " Water: " + water.value + " \xB0" + water.units;

      model.store.entry.value = "";
      model.store.date.value = "";
    },
    _: () => {}
  });

  return model;
};

export default receive;
