import { initialModel } from "./model";
import { receive } from "./receive";

export const component = id => ({
  initialModel,
  receive: receive(id)
});
