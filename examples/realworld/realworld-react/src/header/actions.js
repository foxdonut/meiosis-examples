import { page } from "../page";

export const createActions = update => {
  const pageActions = page.createActions(update);

  return {
    loginPage: evt => {
      evt.preventDefault();
      pageActions.loginPage();
    }
  };
};
