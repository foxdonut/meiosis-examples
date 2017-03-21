import * as React from "react";
import * as classnames from "classnames";

import { State } from "../util";
import { actions } from "./actions";

export const view = (model: State, update: Function) => {
  const clearCompleted = (model: State) => model.clearCompletedVisible ?
    <button className="clear-completed" onClick={actions.clearCompleted(update)}>Clear completed</button> : null;

  return (
    <footer className="footer">
      <span className="todo-count">{model.itemsLeftText}</span>
      <ul className="filters">
        {/* These links use hrefs. */}
        <li><a href="#/" className={classnames({selected: model.allSelected})}>All</a></li>
        <li><a href="#/active" className={classnames({selected: model.activeSelected})}>Active</a></li>
        {/* This link sets the route on the model. The result should be the same. */}
        <li>
          <a href="javascript://" onClick={actions.filterBy(update, "completed")}
            className={classnames({selected: model.completedSelected})}>Completed</a>
        </li>
      </ul>
      {clearCompleted(model)}
    </footer>
  );
};
