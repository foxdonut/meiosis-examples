import { assoc, assocPath, compose, lensProp, merge, over } from "ramda";

import { ajaxServices } from "../util/ajax-services";
import { TodoForm } from "./todoForm"
import { Root } from "../root"

export const actions = (update, actions) => {
  const updateList = todo => model => {
    model.todos[todo.id] = todo;

    if (model.todoIds.indexOf(todo.id) < 0) {
      model.todoIds.push(todo.id);
    }
    return model;
  };

  const clearForm = id => over(lensProp(id),
    model => merge(model, ({ todo: { }, validationErrors: { } }))
  );

  return {
    editTodo: (id, todo) => update(compose(
      assocPath([id, "editing"], true),
      over(lensProp("todoForm"), model => merge(model, TodoForm.model({ todo }))),
      assoc("todoForm:" + todo.id, TodoForm.model({ todo }))
    )),

    cancelEditTodo: (id, todo) => update(compose(
      assocPath(["todoItem:" + todo.id, "editing"], false),
      clearForm(id)
    )),

    saveTodo: (id, todo) => {
      actions.showMessage("Saving, please wait...");

      return ajaxServices.saveTodo(todo).
        then(todo => update(compose(
          updateList(todo),
          Root.updates.clearMessage(),
          assocPath(["todoItem:" + todo.id, "editing"], false),
          clearForm(id)
        ))).
        catch(() => update(compose(
          Root.updates.clearMessage(),
          Root.updates.showError("Sorry, an error occurred.")
        )));
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
        catch(() => update(compose(
          Root.updates.clearMessage(),
          Root.updates.showError("Sorry, an error occurred.")
        )));
    }
  }
};
