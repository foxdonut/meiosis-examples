import { view } from "./view-inferno.jsx";

export const app = {
  createView: (update, events) => view(update, events)
};
