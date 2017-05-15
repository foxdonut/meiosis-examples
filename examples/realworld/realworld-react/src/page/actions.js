import { assoc } from "ramda";

export const createActions = update => ({
  goToLoginPage: () => update(assoc("page", "Login"))
});
