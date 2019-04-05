import { html } from "lit-html"

import { actions } from "../root/actions"

export const header = {
  view: ({ root }) => html`
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        @keyup=${evt => actions.newTodoKeyUp(root.update, evt)}
        .value=${root.state.newTodo}
        autofocus
      />
    </header>
  `
}
