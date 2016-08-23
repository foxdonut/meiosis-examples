import { createComponent } from "meiosis";

import initialModel from "./model";
import receive from "./receive";
import view from "./view";

const entryComponent = MainAction => createComponent({
  initialModel,
  view,
  receive: receive(MainAction)
});

export default entryComponent;
