import { view } from "./view-react";

export const app = {
  createView: (update, events) => view(update, events)
};
