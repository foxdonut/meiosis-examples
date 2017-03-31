/*
These functions return Promises and use setTimeout to simulate async behaviour. This makes the
example more realistic. Indeed, a real-world application would make async AJAX requests to a
backend server.
*/
import { Promise } from "es6-promise";
import { Todo } from "../util";

const STORAGE_KEY = "meiosis-todomvc";

const findIndex = (todos: Todo[], todoId: string) => {
  let index = -1;

  for (let i = 0, t = todos.length; i < t; i++) {
    if (todos[i].id === todoId) {
      index = i;
      break;
    }
  }
  return index;
};

const replaceTodoAtIndex = (todos: Todo[], todo: Todo, index: number) => {
  return todos.slice(0, index).concat([todo]).concat(todos.slice(index + 1));
};

const deleteTodoAtIndex = (todos: Todo[], index: number) => {
  return todos.slice(0, index).concat(todos.slice(index + 1));
};

const loadAll = () => {
  return new Promise(resolve =>
    setTimeout(() => resolve(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")), 10));
};

const saveAll = (todos: Todo[]) => {
  return new Promise(resolve =>
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      resolve();
    }, 10));
};

export const todoStorage = {
  clearCompleted: () => {
    return new Promise((resolve) =>
      loadAll().then((todos: Todo[]) => {
        const updatedTodos: Todo[] = [];

        for (let i = 0, t = todos.length; i < t; i++) {
          if (!todos[i].completed) {
            updatedTodos.push(todos[i]);
          }
        }
        saveAll(updatedTodos).then(() => resolve(updatedTodos));
      }));
  },
  deleteTodoId: (todoId: string) => {
    return new Promise((resolve, reject) =>
      loadAll().then((todos: Todo[]) => {
        const index = findIndex(todos, todoId);

        if (index >= 0) {
          todos = deleteTodoAtIndex(todos, index);
          saveAll(todos).then(() => resolve());
        }
        else {
          reject();
        }
      }));
  },
  filter: (by: string) => {
    const completedSelected = by === "completed";
    const filterBy = (todo: Todo) => (!!todo.completed) === completedSelected;

    return new Promise((resolve) =>
      loadAll().then((todos: Todo[]) => {
        const filteredTodos = todos.filter(filterBy);
        resolve(filteredTodos);
      }));
  },
  loadAll,
  saveAll,
  saveTodo: (todo: Todo) => {
    return new Promise(resolve =>
      loadAll().then((todos: Todo[]) => {
        const id: string = todo.id;

        if (id) {
          const index = findIndex(todos, id);
          todo.completed = todos[index].completed;
          todos = replaceTodoAtIndex(todos, todo, index);
        }
        else {
          todo = { title: todo.title, id: String(new Date().getTime()), completed: false };
          todos = todos.concat([todo]);
        }
        saveAll(todos).then(() => resolve(todo));
      }));
  },
  setAllCompleted: (completed: boolean) => {
    return new Promise((resolve) =>
      loadAll().then((todos: Todo[]) => {
        todos.forEach((todo: Todo) => {
          todo.completed = completed;
        });
        saveAll(todos).then(() => resolve());
      }));
  },
  setCompleted: (id: string, completed: boolean) => {
    return new Promise((resolve, reject) =>
      loadAll().then((todos: Todo[]) => {
        const index = findIndex(todos, id);

        if (index >= 0) {
          const todo = todos[index];
          todo.completed = completed;
          todos = replaceTodoAtIndex(todos, todo, index);
          saveAll(todos).then(() => resolve());
        }
        else {
          reject();
        }
      }));
  }
};
