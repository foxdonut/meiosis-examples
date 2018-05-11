import { createView } from "./view";

export const footer = {
  create: update => {
    return createView(update);
  }
};
