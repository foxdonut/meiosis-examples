import { html } from "lit-html"
import { classMap } from "lit-html/directives/class-map"

const getTodoClassMap = (state, todo) => ({
  completed: todo.completed,
  editing: todo.id === state.editTodo.id
})

const todoEdit = ({ state, actions }) => html`
  <input
    class="edit"
    type="text"
    .value=${state.editTodo.title}
    @keyup=${evt => actions.editKeyUp(state.editTodo.id, evt)}
    @blur=${() => actions.editBlur(state.editTodo)}
  />
`

const todoItem = ({ state, actions, todoId }) => {
  const todo = state.todosById[todoId]
  const editing = todo.id === state.editTodo.id

  return html`
    <li class=${classMap(getTodoClassMap(state, todo))}>
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          .checked=${todo.completed}
          @change=${evt => actions.toggleTodo(todo.id, evt.target.checked)}
        />
        <label @dblclick=${evt => actions.editTodo(todo, evt)}>${todo.title}</label>
        <button class="destroy" @click=${() => actions.deleteTodo(todo.id)}></button>
      </div>
      ${editing ? todoEdit({ state, actions }) : null}
    </li>
  `
}

export const main = {
  view: ({ state, actions }) => html`
    <section class="main">
      <input
        class="toggle-all"
        type="checkbox"
        @change=${evt => actions.toggleAllTodos(evt.target.checked)}
        .checked=${state.allCompleted}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${state.filteredTodoIds.map(todoId => todoItem({ state, actions, todoId }))}
      </ul>
    </section>
  `
}
