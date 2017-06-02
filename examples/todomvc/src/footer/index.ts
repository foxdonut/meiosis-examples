import { UpdateFunction, ViewFunction } from "meiosis";

import { createRoutes } from "./routes";
import { createView } from "./view";

export const footer = {
  create: (update: UpdateFunction, parentActions: any): ViewFunction => {
    createRoutes(parentActions);
    return createView(parentActions);
  }
};
