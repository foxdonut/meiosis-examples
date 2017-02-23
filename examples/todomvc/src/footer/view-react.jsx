import React from "react";
import classnames from "classnames";

import { intents } from "./actions";

export const footerView = model => {
  const clearCompleted = model => model.clearCompleted ?
    <button className="clear-completed" onClick={intents.clearCompleted}>Clear completed</button> : null;

  return (
    <footer className="footer">
      <span className="todo-count">{model.itemsLeftText}</span>
      <ul className="filters">
        <li>
          <a href="#" onClick={intents.filter("")}
            className={classnames({selected: model.allSelected})}>All</a>
        </li>
        <li>
          <a href="#" onClick={intents.filter("active")}
            className={classnames({selected: model.activeSelected})}>Active</a>
        </li>
        <li>
          <a href="#" onClick={intents.filter("completed")}
            className={classnames({selected: model.completedSelected})}>Completed</a>
        </li>
      </ul>
      {clearCompleted(model)}
    </footer>
  );
};
