import { VNode } from "snabbdom/vnode";
import { State, UpdateFunction } from "../util";

import { createView } from "./view";

export const createFooter = (update: UpdateFunction, parentActions: any) => ({
  view: createView(parentActions)
});
