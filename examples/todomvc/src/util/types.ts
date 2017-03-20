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
  filter: string;
  route: string;
}

export interface State extends Model {
  clearCompletedVisible: boolean;
  itemsLeftText: string;
  allCompleted: boolean;
  allSelected: boolean;
  activeSelected: boolean;
  completedSelected: boolean;
}
