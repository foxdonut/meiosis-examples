import R from "ramda";

export const updates = {
  navigateTo: pageId => R.assoc("pageId", pageId),
  showMessage: message => R.assoc("message", message),
  clearMessage: () => R.assoc("message", null),
  showError: error => R.assoc("error", error),
  clearError: () => R.assoc("error", null)
};

export const actions = ({ update }) => ({
  navigateTo: R.compose(update, updates.navigateTo),
  showMessage: R.compose(update, updates.showMessage),
  clearMessage: R.compose(update, updates.clearMessage),
  showError: R.compose(update, updates.showError),
  clearError: R.compose(update, updates.clearError)
});
