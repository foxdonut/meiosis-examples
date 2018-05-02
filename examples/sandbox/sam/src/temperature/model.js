export const createModel = update => {
  const acceptors = {
    precipitations: value =>
      update(model => {
        model.precipitations = value;
        return model;
      }),

    precipitation: value =>
      update(model => {
        model.precipitation = value;
        return model;
      }),

    date: value =>
      update(model => {
        model.date = value;
        return model;
      }),

    increase: amount =>
      update(model => {
        model.value = model.value + amount;
        return model;
      }),

    changeUnits: () =>
      update(model => {
        if (model.units === "C") {
          model.units = "F";
          model.value = Math.round( model.value * 9 / 5 + 32 );
        }
        else {
          model.units = "C";
          model.value = Math.round( (model.value - 32) / 9 * 5 );
        }
        return model;
      })
  };

  return {
    present: proposal => {
      const key = Object.keys(proposal)[0];
      const value = proposal[key];
      acceptors[key](value);
    }
  };
};