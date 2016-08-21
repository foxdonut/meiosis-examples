import Action from "./actions";

const receive = id => (model, proposal) => {
  if (proposal.id === id) {
    Action.case({
      Increase: amount => {
        model.temperature = model.temperature + amount;
      },
      Decrease: amount => {
        model.temperature = model.temperature - amount;
      },
      ChangeUnits: () => {
        if (model.units === "F") {
          model.temperature = Math.round( (model.temperature - 32) / 9 * 5 );
          model.units = "C";
        }
        else {
          model.temperature = Math.round( model.temperature * 9 / 5 + 32 );
          model.units = "F";
        }
      },
      _: () => {}
    }, proposal.action);
  }

  return model;
};

export default receive;
