import flyd from "flyd";

export const temperatureActions = {
  increase: flyd.stream(),
  decrease: flyd.stream(),
  changeUnits: flyd.stream()
};
