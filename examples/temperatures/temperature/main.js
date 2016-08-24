import initialModel from "./model";
import receive from "./receive";
//import view from "./view";
import view from "./view.jsx";

const temperatureConfig = (id, label) => ({
  initialModel,
  receive: receive(id),
  view: view(id, label)
});

export default temperatureConfig;
