import { assoc, complement, filter, merge, propEq } from "ramda";

import ajaxServices from "../util/ajax-services";

export const createActions = update => ({
  deleteTodo: todo => () => {
    update(assoc("message", "Deleting, please wait..."));

    const id = todo.id;

    ajaxServices.deleteTodo(id).
      then(() => update(model =>
        merge(model, {
          todos: filter(complement(propEq("id", id)), model.todos),
          message: ""
        }))
      ).
      catch(() => update(assoc("message", "Sorry, an error occurred.")));
  }
});
