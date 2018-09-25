// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";
import classNames from "classnames";

import { ProjectsPage, TodoListPage } from "../util/constants";

export const view = ({ actions, todos }) => model => (
  <div>
    <div className="ui two item menu">
      <a className={classNames("item", { "active": model.pageId === ProjectsPage })}
         onClick={() => actions.navigateTo(ProjectsPage)}>
        Projects
      </a>
      <a className={classNames("item", { "active": model.pageId === TodoListPage })}
         onClick={() => actions.navigateTo(TodoListPage)}>
        Todo List
      </a>
    </div>
    <div>
      {todos(model)}
    </div>
  </div>
);
