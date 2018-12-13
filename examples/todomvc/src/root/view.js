import { html } from "lit-html"

import { header } from "../header"
import { main } from "../main"
import { footer } from "../footer"

export const view = ({ state, actions }) => html`
  <div>
    <section class="todoapp">
      ${header.view({ state, actions })}
      ${main.view({ state, actions })}
      ${footer.view({ state, actions })}
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>,
      <p>
        <span>Meiosis - Created by </span>
        <a href="http://twitter.com/foxdonut00">foxdonut00</a>
      </p>
      <p>
        <span>Part of </span>
        <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </div>
`