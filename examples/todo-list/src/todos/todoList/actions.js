import R from "ramda";

import { ajaxServices } from "../../util/ajax-services";

const updateTodos = (todos, todo) => {
  const index = R.findIndex(R.propEq("id", todo.id))(todos);
  return index >= 0 ? R.set(R.lensIndex(index), todo, todos) : R.append(todo, todos);
};

export const createActions = id => update => {
  const showMessage = message => update(R.assocPath([id, "message"], message));

  return {
    deleteTodo: todo => {
      showMessage("Deleting, please wait...");

      ajaxServices.deleteTodo(todo.id).
        then(() => update(model => R.assoc(id,
          R.merge(model[id], {
            todos: R.filter(R.complement(R.propEq("id", todo.id)), model[id].todos),
            message: ""
          }), model)
        )).
        catch(() => showMessage("Sorry, an error occurred."));
    },

    updateList: todo => update(model => R.assoc(id,
      R.merge(model[id], { todos: updateTodos(model[id].todos, todo), message: "" }),
      model
    )),

    showMessage
  }
};
