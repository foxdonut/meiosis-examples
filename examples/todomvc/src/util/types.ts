export interface Todo {
  id?: string;
  title?: string;
  completed?: boolean;
}

export interface Model {
  editTodo: Todo;
  newTodo: string;
  todoIds: string[];
  todosById: { [id: string]: Todo };
  filterBy: string;
}

export interface State extends Model {
  clearCompletedVisible: boolean;
  itemsLeftText: string;
  allCompleted: boolean;
  allSelected: boolean;
  activeSelected: boolean;
  completedSelected: boolean;
}
