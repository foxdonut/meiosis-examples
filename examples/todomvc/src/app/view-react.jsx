import React from "react";

import { footerView } from "../footer/view-react.jsx";
import { headerView } from "../header/view-react.jsx";
import { mainView } from "../main/view-react.jsx";

const info = (
  <footer className="info">
    <p>Double-click to edit a todo</p>
    <p>Meiosis - React - Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
);

export const view = model => (
  <div>
    <section className="todoapp">
      {headerView(model)}
      {mainView(model)}
      {footerView(model)}
    </section>
    {info}
  </div>
);
