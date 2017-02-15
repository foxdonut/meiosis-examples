export const receive = (model, proposal) => {
  proposal.case({
    Save: save => {
      const air = save.temperature.air;
      const water = save.temperature.water;

      model.saved = "Entry #" + save.entry.value + " on " + save.date.value + ":" +
        " Air: " + air.value + " \xB0" + air.units +
        " Water: " + water.value + " \xB0" + water.units;

      model.entry.value = "";
      model.date.value = "";
    }
  });

  return model;
};
