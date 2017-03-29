import ajax from "./ajax-axios";
import todoUrl from "./todoUrl";

const loadTodos = () => ajax.getJSON(todoUrl.urlForList);

const deleteTodo = todoId => ajax.deleteJSON(todoUrl.urlForDelete(todoId));

const saveTodo = todo => ajax.postJSON(todoUrl.urlForSave, todo);

const ajaxServices = { loadTodos, deleteTodo, saveTodo };

export default ajaxServices;
