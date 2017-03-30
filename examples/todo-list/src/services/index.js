import ajaxServices from "../util/ajax-services";

export const services = {
  create: (_update, events) => {
    events.onLoadTodos.map(() => {
      events.loadTodosStart(true);

      ajaxServices.loadTodos().
        then(events.loadTodosSuccess).
        catch(() => events.loadTodosFailure(true));
    });

    events.onSaveTodo.map(todo => {
      events.saveTodoStart(true);

      ajaxServices.saveTodo(todo).
        then(events.saveTodoSuccess).
        catch(() => events.saveTodoFailure(true));
    });

    events.onDeleteTodo.map(id => {
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
      "onDeleteTodo",
      "onLoadTodos",
      "onSaveTodo"
    ]
  }
};
