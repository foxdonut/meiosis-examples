import R from "ramda";

import { ajaxServices } from "../util/ajax-services";
import { TodoForm } from "./todoForm"

export const actions = ({ update, actions, updates }) => {
  const updateList = todo => model => {
    model.todos[todo.id] = todo;

    if (model.todoIds.indexOf(todo.id) < 0) {
      if (model.todos[R.last(model.todoIds)].priority <= todo.priority) {
        model.todoIds.push(todo.id);
      }
      else {
        for (let i = 0; i < model.todoIds.length; i++) {
          if (model.todos[model.todoIds[i]].priority > todo.priority) {
            model.todoIds.splice(i, 0, todo.id);
            break;
          }
        }
      }
    }
    return model;
  };

  const clearForm = id => R.over(R.lensProp(id),
    model => R.merge(model, ({ todo: { }, validationErrors: { } }))
  );

  return {
    editTodo: (id, todo) => update(R.compose(
      R.assocPath([id, "editing"], true),
      R.assoc(`todoForm:${todo.id}`, TodoForm.model({ todo }))
    )),

    cancelEditTodo: (id, todo) => update(R.compose(
      R.assocPath([`todoItem:${todo.id}`, "editing"], false),
      clearForm(id)
    )),

    saveTodo: (id, todo) => {
      actions.showMessage("Saving, please wait...");

      return ajaxServices.saveTodo(todo).
        then(todo => update(R.compose(
          updateList(todo),
          updates.clearMessage(),
          R.assocPath([`todoItem:${todo.id}`, "editing"], false),
          clearForm(id)
        ))).
        catch(() => update(R.compose(
          updates.clearMessage(),
          updates.showError("Sorry, an error occurred. Please try again.")
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
        catch(() => update(R.compose(
          updates.clearMessage(),
          updates.showError("Sorry, an error occurred. Please try again.")
        )));
    }
  }
};
