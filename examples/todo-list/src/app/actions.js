import { append, assoc, assocPath, compose, findIndex, lensIndex, merge, propEq, set } from "ramda";

import ajaxServices from "../util/ajax-services";

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

export const createActions = update => ({
  editTodo: todo => () => update(
    compose(
      assocPath(["form", "todo"], todo),
      assocPath(["form", "validationErrors"], { })
    )
  ),

  saveTodo: todo => {
    update(assocPath(["list", "message"], "Saving, please wait..."));

    ajaxServices.saveTodo(todo).
      then(todo => update(
        compose(
          assocPath(["form", "todo"], { }),
          assocPath(["form", "validationErrors"], { }),
          model => assoc("list",
            merge(model.list, { todos: updateTodos(model.list.todos, todo), message: "" }),
            model
          )
        )
      )).
      catch(() => update(assocPath(["list", "message"], "Sorry, an error occurred.")));
  }
});
