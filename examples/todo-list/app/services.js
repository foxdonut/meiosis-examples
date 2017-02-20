import ajax from "../util/ajax-axios";
import todoUrl from "../util/todoUrl";

const loadTodos = () => ajax.getJSON(todoUrl.urlForList);

const deleteTodo = todoId => ajax.deleteJSON(todoUrl.urlForDelete(todoId));

const saveTodo = todo => ajax.postJSON(todoUrl.urlForSave, todo);

const services = { loadTodos, deleteTodo, saveTodo };

export default services;
