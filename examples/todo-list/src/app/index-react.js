import { view } from "./view-react";

export const app = (update, events) => ({
  view: view(update, events)
});
