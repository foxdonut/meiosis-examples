import { html } from "lit-html"
import { classMap } from "lit-html/directives/class-map"

import { actions } from "../root/actions"

const getTodoClassMap = (state, todo) => ({
  completed: todo.completed,
  editing: todo.id === state.editTodo.id
})

const todoEdit = ({ root }) => html`
  <input
    class="edit"
    type="text"
    .value=${root.state.editTodo.title}
    @keyup=${evt => actions.editKeyUp(root.update, root.state.editTodo.id, evt)}
    @blur=${() => actions.editBlur(root.update, root.state.editTodo)}
  />
`

const todoItem = ({ root, todoId }) => {
  const todo = root.state.todosById[todoId]
  const editing = todo.id === root.state.editTodo.id

  return html`
    <li class=${classMap(getTodoClassMap(root.state, todo))}>
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          .checked=${todo.completed}
          @change=${evt => actions.toggleTodo(root.update, todo.id, evt.target.checked)}
        />
        <label @dblclick=${evt => actions.editTodo(root.update, todo, evt)}>${todo.title}</label>
        <button class="destroy" @click=${() => actions.deleteTodo(root.update, todo.id)}></button>
      </div>
      ${editing ? todoEdit({ root }) : null}
    </li>
  `
}

export const main = {
  view: ({ root }) => html`
    <section class="main">
      <input
        class="toggle-all"
        type="checkbox"
        @change=${evt => actions.toggleAllTodos(root.update, evt.target.checked)}
        .checked=${root.state.allCompleted}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${root.state.filteredTodoIds.map(todoId => todoItem({ root, todoId }))}
      </ul>
    </section>
  `
}
