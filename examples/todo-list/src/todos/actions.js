import { assoc, assocPath, compose } from "ramda";

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
    editTodo: todo => update(compose(
      assoc("todoForm", TodoForm.model({ todo })),
      assoc("todoForm:" + todo.id, TodoForm.model({ todo }))
    )),

    cancelEditTodo: todo => update(
      assocPath([`todoItem:${todo.id}`, "editing"], false)
    ),

    saveTodo: todo => {
      actions.showMessage("Saving, please wait...");

      return ajaxServices.saveTodo(todo).
        then(todo => {
          updateList(todo);
          actions.clearMessage();
          update(assocPath([`todoItem:${todo.id}`, "editing"], false));
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
