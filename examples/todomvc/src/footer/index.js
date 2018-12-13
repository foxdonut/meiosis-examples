import { html } from "lit-html"
import { classMap } from "lit-html/directives/class-map"

const clearCompleted = actions => html`
  <button class="clear-completed" @click=${actions.clearCompleted}>
    Clear completed
  </button>
`

export const footer = {
  view: (state, actions) => html`
    <footer class="footer">
      <span class="todo-count">${state.itemsLeftText}</span>
      <ul class="filters">
        <li><a href="#/" class=${classMap({ selected: state.filterBy === "all" })}>All</a>
        <li><a href="#/active" class=${classMap({ selected: state.filterBy === "active" })}>Active</a>
        <li><a href="#/completed" class=${classMap({ selected: state.filterBy === "completed" })}>Completed</a>
      </ul>
      ${state.clearCompletedVisible ? clearCompleted(actions) : null}
    </footer>
  `
}
