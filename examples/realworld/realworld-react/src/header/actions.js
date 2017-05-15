import { createActions as createPageActions } from "../page/actions";

export const createActions = update => {
  const pageActions = createPageActions(update);

  return {
    goToLoginPage: evt => {
      evt.preventDefault();
      pageActions.goToLoginPage();
    }
  };
};
