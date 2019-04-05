import { html } from "lit-html"
import { classMap } from "lit-html/directives/class-map"

import { actions } from "../root/actions"

const clearCompleted = update => html`
  <button class="clear-completed" @click=${() => actions.clearCompleted(update)}>
    Clear completed
  </button>
`

export const footer = {
  view: ({ root }) => html`
    <footer class="footer">
      <span class="todo-count">${root.state.itemsLeftText}</span>
      <ul class="filters">
        <li><a href="#/" class=${classMap({ selected: root.state.filterBy === "all" })}>All</a></li>
        <li>
          <a href="#/active" class=${classMap({ selected: root.state.filterBy === "active" })}
            >Active</a
          >
        </li>
        <li>
          <a href="#/completed" class=${classMap({ selected: root.state.filterBy === "completed" })}
            >Completed</a
          >
        </li>
      </ul>

      ${root.state.clearCompletedVisible ? clearCompleted(root.update) : null}
    </footer>
  `
}
