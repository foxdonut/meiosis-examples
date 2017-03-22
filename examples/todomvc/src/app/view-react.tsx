import * as React from "react";

import { State } from "../util";
import { view as footerView } from "../footer/view-react";
import { view as headerView } from "../header/view-react";
import { view as mainView } from "../main/view-react";

const info = (
  <footer className="info">
    <p>Double-click to edit a todo</p>
    <p>Meiosis - React - Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
);

export const view = (model: State, update: Function, events: any) => (
  <div>
    <section className="todoapp">
      {headerView(model, update)}
      {mainView(model, update)}
      {footerView(model, update, events)}
    </section>
    {info}
  </div>
);
