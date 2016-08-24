import initialModel from "./model";
import receive from "./receive";
//import view from "./view";
import view from "./view.jsx";

const dateConfig = MainAction => ({
  initialModel,
  view,
  receive: receive(MainAction)
});

export default dateConfig;
