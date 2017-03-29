import ajaxServices from "../util/ajax-services";

export const services = {
  create: (_update, events) => {
    events.loadTodos.map(() => {
      events.loadTodosStart(true);

      ajaxServices.loadTodos().
        then(events.loadTodosSuccess).
        catch(events.loadTodosFailure);
    });

    events.saveTodo.map(todo => {
      events.saveTodoStart(true);

      ajaxServices.saveTodo(todo).
        then(events.saveTodoSuccess).
        catch(events.saveTodoFailure);
    });
  },
  events: {
    emit: [
      "loadTodosFailure",
      "loadTodosStart",
      "loadTodosSuccess",
      "saveTodoFailure",
      "saveTodoStart",
      "saveTodoSuccess"
    ],
    listen: [
      "loadTodos",
      "saveTodo"
    ]
  }
};
