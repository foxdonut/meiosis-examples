import ajaxServices from "../util/ajax-services";

export const services = {
  create: (_update, events) => {
    events.loadTodos.map(() => {
      events.loadTodosStart(true);

      ajaxServices.loadTodos().
        then(events.loadTodosSuccess).
        catch(() => events.loadTodosFailure(true));
    });

    events.saveTodo.map(todo => {
      events.saveTodoStart(true);

      ajaxServices.saveTodo(todo).
        then(events.saveTodoSuccess).
        catch(() => events.saveTodoFailure(true));
    });

    events.deleteTodo.map(id => {
      events.deleteTodoStart(true);

      ajaxServices.deleteTodo(id).
        then(() => events.deleteTodoSuccess(id)).
        catch(() => events.deleteTodoFailure(true));
    });
  },
  events: {
    emit: [
      "deleteTodoFailure",
      "deleteTodoStart",
      "deleteTodoSuccess",
      "loadTodosFailure",
      "loadTodosStart",
      "loadTodosSuccess",
      "saveTodoFailure",
      "saveTodoStart",
      "saveTodoSuccess"
    ],
    listen: [
      "deleteTodo",
      "loadTodos",
      "saveTodo"
    ]
  }
};
