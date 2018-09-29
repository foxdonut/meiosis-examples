// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";
import classNames from "classnames";

import { TodoListPage, InlineEditPage } from "./constants";

export const view = ({ actions, todos }) => model => (
  <div>
    <div className="ui two item menu">
      <a className={classNames("item", { "active": model.pageId === TodoListPage })}
         onClick={() => actions.navigateTo(TodoListPage)}>
        Todo List
      </a>
      <a className={classNames("item", { "active": model.pageId === InlineEditPage })}
         onClick={() => actions.navigateTo(InlineEditPage)}>
        Inline Edit
      </a>
    </div>
    <div>
      {todos(model)}
    </div>
  </div>
);
