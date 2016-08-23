import initialModel from "./model";
import receive from "./receive";
import view from "./view";

const entryConfig = MainAction => ({
  initialModel,
  view,
  receive: receive(MainAction)
});

export default entryConfig;
