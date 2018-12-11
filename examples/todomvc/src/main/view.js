import { html } from "lit-html"

import { todoItem } from "../todoItem"

export const view = (state, actions) => html`
  <section class="main">
    <input class="toggle-all"
      type="checkbox"
      @change=${actions.toggleAllTodos}
      .checked=${state.allCompleted}>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">${state.todoIds.map(id => todoItem.view(state, actions, id))}</ul>
  </section>
`
