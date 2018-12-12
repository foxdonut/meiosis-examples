import { html } from "lit-html"

export const view = (state, actions) => html`
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
      placeholder="What needs to be done?"
      @keyup=${actions.newTodoKeyUp}
      .value=${state.newTodo}
      autofocus>
  </header>
`
