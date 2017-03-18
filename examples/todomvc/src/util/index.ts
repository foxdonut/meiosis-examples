export interface Todo {
  id?: string;
  title?: string;
  completed?: boolean;
}

export interface Model {
  editTodo: Todo;
  newTodo: string;
  todoIds: Array<string>;
  todosById: { [id: string]: Todo };
}
