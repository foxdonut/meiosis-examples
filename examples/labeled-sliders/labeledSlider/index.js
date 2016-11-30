import { initialModel } from "./model";
import { view } from "./view";
import { receive } from "./receive";

export const component = id => ({
  initialModel,
  view: view(id),
  receive: receive(id)
});
