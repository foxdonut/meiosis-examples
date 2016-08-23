import Action from "./actions";

const receive = id => (model, proposal) => {
  if (proposal.id === id) {
    Action.case({
      Increase: amount => {
        model.value = model.value + amount;
      },
      Decrease: amount => {
        model.value = model.value - amount;
      },
      ChangeUnits: () => {
        if (model.units === "F") {
          model.value = Math.round( (model.value - 32) / 9 * 5 );
          model.units = "C";
        }
        else {
          model.value = Math.round( model.value * 9 / 5 + 32 );
          model.units = "F";
        }
      },
      _: () => {}
    }, proposal.action);
  }

  return model;
};

export default receive;
