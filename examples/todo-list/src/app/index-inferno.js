import { view } from "./view-inferno.jsx";

export const app = (update, events) => ({
  view: view(update, events)
});
