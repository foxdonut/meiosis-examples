export type UpdateFunction = (model: any) => any;

export type ViewFunction = (model: any) => any;

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
  clearCompletedVisible?: boolean;
  itemsLeftText?: string;
  allCompleted?: boolean;
  allSelected?: boolean;
  activeSelected?: boolean;
  completedSelected?: boolean;
}

export const T = (model: any, func: UpdateFunction) => func(model);
export const W = (f: any) => (x: any) => f(x)(x);
