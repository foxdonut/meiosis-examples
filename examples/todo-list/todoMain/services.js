import { Just, Nothing } from "data.maybe";
import { always } from "ramda";

import ajax from "../util/ajax-axios";
import todoUrl from "../util/todoUrl";

const intoModel = todos => ({ todos: todos, message: "" });

// loadTodosHttp : Task Http.Error Model
const loadTodosHttp = ajax.getJSON(todoUrl.get).then(intoModel);

// deleteTodoHttp : Number -> Task Http.Error Number
const deleteTodoHttp = todoId =>
  ajax.deleteJSON(todoUrl.delete(todoId)).then(always(todoId));

// errorMessage : Http.Error -> Task Never Model
const errorMessage = always({ todos: [], message: "An error occurred." });

// loadTodos : Task Never Model
const loadTodos = loadTodosHttp.catch(errorMessage);

// nothingTask : Http.Error -> Task Never (Maybe Number)
const nothingTask = always(Nothing());

// deleteTodo : Number -> Task Never (Maybe Number)
const deleteTodo = todoId =>
  deleteTodoHttp(todoId).then(Just).catch(nothingTask);

// saveTodoHttp : Todo -> Task Http.Error Todo
const saveTodoHttp = todo => ajax.postJSON(todoUrl.save, todo);

// saveTodo : Todo -> Task Never (Maybe Todo)
const saveTodo = todo =>
  saveTodoHttp(todo).then(Just).catch(nothingTask);

const services = { loadTodos, deleteTodo, saveTodo };

export default services;
