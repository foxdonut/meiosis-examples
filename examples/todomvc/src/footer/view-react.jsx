import React from "react";
import classnames from "classnames";

import { intents } from "./actions";

export const footerView = model => {
  const clearCompleted = model => model.clearCompletedVisible ?
    <button className="clear-completed" onClick={intents.clearCompleted}>Clear completed</button> : null;

  return (
    <footer className="footer">
      <span className="todo-count">{model.itemsLeftText}</span>
      <ul className="filters">
        <li><a href="#/" className={classnames({selected: model.allSelected})}>All</a></li>
        <li><a href="#/active" className={classnames({selected: model.activeSelected})}>Active</a></li>
        <li><a href="#/completed" className={classnames({selected: model.completedSelected})}>Completed</a></li>
      </ul>
      {clearCompleted(model)}
    </footer>
  );
};
