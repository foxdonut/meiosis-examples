import { ajaxServices } from "../util/ajax-services";
import { validateModel } from "./validation";

export const createActions = (_id, { todoList, todoForm }) => update => {
  const todoListActions = todoList.createActions(update);
  const todoFormActions = todoForm.createActions(update);

  return Object.assign(
    {
      saveTodo: todo => {
        const validationErrors = validateModel(todo);

        if (Object.keys(validationErrors).length === 0) {
          todoListActions.showMessage("Saving, please wait...");

          ajaxServices.saveTodo(todo).
            then(todo => {
              todoFormActions.clearForm();
              todoListActions.updateList(todo);
            }).
            catch(() => todoListActions.showMessage("Sorry, an error occurred."));
        }
        else {
          todoFormActions.showValidationErrors(validationErrors);
        }
      }
    },
    todoListActions,
    todoFormActions
  );
};
