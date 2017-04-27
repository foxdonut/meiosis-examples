import { createView } from "./view";

export const main = {
  create: update => {
    return createView(update);
  }
};

