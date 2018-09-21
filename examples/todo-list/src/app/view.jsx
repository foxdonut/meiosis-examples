// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

import { ProjectsPage, TodoListPage } from "../util/constants";

export const createView = ({ todos }, actions) => {
  const todosView = todos.createView(actions);

  return model => (
    <div>
      <div className="ui two item menu">
        <a className={"item" + (model.pageId === ProjectsPage ? " active" : "")}
           onClick={() => actions.navigateTo(ProjectsPage)}>
          Projects
        </a>
        <a className={"item" + (model.pageId === TodoListPage ? " active" : "")}
           onClick={() => actions.navigateTo(TodoListPage)}>
          Todo List
        </a>
      </div>
      <div>
        {todosView(model)}
      </div>
    </div>
  );
};
