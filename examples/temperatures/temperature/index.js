import { initialModel } from "./model";
import { receive } from "./receive";

export const temperature = (id, label) => ({
  initialModel,
  receive: receive(id)
});
