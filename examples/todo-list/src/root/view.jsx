// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";
import classNames from "classnames";

import { TodoListPage, ProjectPage } from "./constants";

export const view = ({ actions, todos }) => model => (
  <div>
    <div className="ui two item menu">
      <a className={classNames("item", { "active": model.pageId === TodoListPage })}
         onClick={() => actions.navigateTo(TodoListPage)}>
        Todo List
      </a>
      <a className={classNames("item", { "active": model.pageId === ProjectPage })}
         onClick={() => actions.navigateTo(ProjectPage)}>
        Projects
      </a>
    </div>
    <div>
      {todos(model)}
    </div>
    <div className="ui small modal message">
      <div className="content">
        <p>{model.message}</p>
      </div>
    </div>
    <div className="ui small modal error">
      <div className="content">
        <p>{model.error}</p>
      </div>
      <div className="actions">
        <div className="ui ok right button">
          Ok
        </div>
      </div>
    </div>
  </div>
);
