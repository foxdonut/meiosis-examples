import { html } from "lit-html"
import { classMap } from "lit-html/directives/class-map"

const clearCompleted = (state, actions) => {
  return (state.clearCompletedVisible)
    ? html`
        <button class="clear-completed"
          @click=${actions.clearCompleted}>
          Clear completed
        </button>
      `
    : html`<span></span>`
}

export const view = (state, actions) => html`
  <footer class="footer">
    <span class="todo-count">${state.itemsLeftText}</span>
    <ul class="filters">
      <li><a href="#/" class=${classMap({ selected: state.allSelected })}>All</a>
      <li><a href="#/active" class=${classMap({ selected: state.activeSelected })}>Active</a>
      <li><a href="javascript://" @click=${() => actions.filter("completed")}
        class=${classMap({ selected: state.completedSelected })}>Completed</a>
    </ul>
    ${clearCompleted(state, actions)}
  </footer>
`
