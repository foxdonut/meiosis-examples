import { html } from "lit-html"
import { classMap } from "lit/directives/class-map.js"
import { clearCompletedVisible, itemsLeftText } from "../root/util"

const clearCompleted = actions => html`
  <button class="clear-completed" @click=${() => actions.clearCompleted()}>
    Clear completed
  </button>
`

export const footer = {
  view: ({ state, actions }) => html`
    <footer class="footer">
      <span class="todo-count">${itemsLeftText(state)}</span>
      <ul class="filters">
        <li><a href="#/" class=${classMap({ selected: state.filterBy === "all" })}>All</a></li>
        <li>
          <a href="#/active" class=${classMap({ selected: state.filterBy === "active" })}>Active</a>
        </li>
        <li>
          <a href="#/completed" class=${classMap({ selected: state.filterBy === "completed" })}
            >Completed</a
          >
        </li>
      </ul>

      ${clearCompletedVisible(state) ? clearCompleted(actions) : null}
    </footer>
  `
}
