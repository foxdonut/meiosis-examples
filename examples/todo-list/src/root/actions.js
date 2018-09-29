import { assoc, compose } from "ramda";

export const updates = {
  navigateTo: pageId => assoc("pageId", pageId),
  showMessage: message => assoc("message", message),
  clearMessage: () => assoc("message", null),
  showError: error => assoc("error", error),
  clearError: () => assoc("error", null)
};

export const actions = update => ({
  navigateTo: compose(update, updates.navigateTo),
  showMessage: compose(update, updates.showMessage),
  clearMessage: compose(update, updates.clearMessage),
  showError: compose(update, updates.showError),
  clearError: compose(update, updates.clearError)
});
