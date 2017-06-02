import { UpdateFunction, ViewFunction } from "meiosis";

import { createView } from "./view";

export const footer = {
  create: (update: UpdateFunction, parentActions: any): ViewFunction =>
    createView(parentActions)
};
