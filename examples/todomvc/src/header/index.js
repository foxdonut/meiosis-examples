import { html } from "lit"

export const header = {
  view: ({ state, actions }) => html`
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        @keyup=${evt => actions.newTodoKeyUp(evt)}
        .value=${state.newTodo}
        autofocus
      />
    </header>
  `
}
