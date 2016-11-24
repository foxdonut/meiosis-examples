import { initialModel } from "./model";
import { view } from "./view";
import { receive } from "./receive";

export const component = id => ({ initialModel, view, receive: receive(id) });
