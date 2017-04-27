import { createView } from "./view";

export const header = {
  create: update => {
    return createView(update);
  }
};
