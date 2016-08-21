import initialModel from "./model";
import receive from "./receive";
import view from "./view";

const temperatureConfig = (id, label) => ({
  initialModel,
  receive: receive(id),
  view: view(id, label)
});

export default temperatureConfig;
