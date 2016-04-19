import { createTodoList, todoListModel } from "./todoList/main";

export default function(render, element) {
  const todoList = createTodoList(render, element);

  // view rendering
  todoList.render(todoListModel);
}
