import { assoc } from "ramda";

export const actions = update => ({
  navigateTo: pageId => update(
    assoc("pageId", pageId)
  ),
  showMessage: message => update(assoc("message", message)),
  clearMessage: () => update(assoc("message", null))
});
