import flyd from "flyd";

export const temperatureActions = {
  increase: flyd.stream(),
  changeUnits: flyd.stream()
};

export const temperatureIntents = {
  increase: (id, amount) => () => temperatureActions.increase({ id, amount }),
  changeUnits: id => () => temperatureActions.changeUnits({ id })
};