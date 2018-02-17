export const createModel = update => ({
  present: proposal => {
    if (proposal.precipitations !== undefined) {
      update(model => {
        model.precipitations = proposal.precipitations;
        return model;
      });
    }
    else if (proposal.precipitation !== undefined) {
      update(model => {
        model.precipitation = proposal.precipitation;
        return model;
      });
    }
    else if (proposal.date !== undefined) {
      update(model => {
        model.date = proposal.date;
        return model;
      });
    }
    else if (proposal.increase !== undefined) {
      update(model => {
        model.value = model.value + proposal.increase;
        return model;
      });
    }
    else if (proposal.changeUnits !== undefined) {
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
      });
    }
  }
});
