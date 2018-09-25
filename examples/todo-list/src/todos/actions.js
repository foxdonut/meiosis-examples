import { assoc } from "ramda";

import { ajaxServices } from "../util/ajax-services";
import { TodoForm } from "./todoForm"

export const actions = (update, actions) => {
  const updateList = todo => update(model => {
    model.todos[todo.id] = todo;

    if (model.todoIds.indexOf(todo.id) < 0) {
      model.todoIds.push(todo.id);
    }
    return model;
  });

  return {
    editTodo: todo => update(
      assoc("todoForm", TodoForm.model({ todo }))
    ),

    saveTodo: todo => {
      actions.showMessage("Saving, please wait...");

      return ajaxServices.saveTodo(todo).
        then(todo => {
          updateList(todo);
          actions.clearMessage();
        }).
        catch(() => actions.showMessage("Sorry, an error occurred."));
    },

    deleteTodo: todo => {
      actions.showMessage("Deleting, please wait...");

      ajaxServices.deleteTodo(todo.id).
        then(() => {
          update(model => {
            delete model.todos[todo.id];
            model.todoIds.splice(model.todoIds.indexOf(todo.id), 1);
            return model;
          });
          actions.clearMessage();
        }).
        catch(() => actions.showMessage("Sorry, an error occurred."));
    }
  }
};
