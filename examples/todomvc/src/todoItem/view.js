import { html } from "lit-html"

import { todoEdit } from "../todoEdit"

const getTodoClassMap = (state, todo) => ({
  completed: todo.completed,
  editing: state.editing(state, todo)
})

export const view = (state, todoId, actions) => {
  const todo = state.todosById[todoId]
  const editing = (todo.id === state.editTodo.id)

  return html`
    <li class=${getTodoClassMap(state, todo)}>
      <div class="view">
        <input class="toggle"
          type="checkbox"
          @change=${actions.toggleTodo(todo.id)}
          .checked=${todo.completed}>
        <label @dblclick=${actions.editTodo(todo)}>${todo.title}</label>
        <button class="destroy" @click${actions.deleteTodo(todo.id)}></button>
      </div>
      ${editing ? todoEdit.view(state.editTodo) : null}
    </li>
  `
}
