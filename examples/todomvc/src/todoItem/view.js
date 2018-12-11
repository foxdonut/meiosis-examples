import { html } from "lit-html"
import { classMap } from "lit-html/directives/class-map"

import { todoEdit } from "../todoEdit"

const getTodoClassMap = (state, todo) => ({
  completed: todo.completed,
  editing: (todo.id === state.editTodo.id)
})

export const view = (state, actions, todoId) => {
  const todo = state.todosById[todoId]
  const editing = (todo.id === state.editTodo.id)

  return html`
    <li class=${classMap(getTodoClassMap(state, todo))}>
      <div class="view">
        <input class="toggle"
          type="checkbox"
          @change=${actions.toggleTodo(todo.id)}
          .checked=${todo.completed}>
        <label @dblclick=${actions.editTodo(todo)}>${todo.title}</label>
        <button class="destroy" @click=${actions.deleteTodo(todo.id)}></button>
      </div>
      ${editing ? todoEdit.view(state.editTodo, actions) : null}
    </li>
  `
}
