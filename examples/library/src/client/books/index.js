import { createActions } from "./actions";
import { createView } from "./view";

export const createBooks = update => ({
  view: createView(createActions(update))
});
