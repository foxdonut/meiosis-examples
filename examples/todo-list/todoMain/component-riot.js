import { createComponent } from "meiosis";
import riot from "riot";
import { compose } from "ramda";

import nestComponent from "../util/nest-component";
import services from "./services";
import todoFormMain from "../todoForm/main";
import createTodoForm from "../todoForm/component-riot";
import todoListConfig from "../todoList/main";
import createTodoList from "../todoList/component-riot";

export default function() {
  const setup = () => {
    const createNestedComponent = (path, config, params) =>
      compose(createComponent, nestComponent(path), config)(params);

    const todoFormParams = { services, setup: createTodoForm };
    const todoFormObj = todoFormMain(todoFormParams);

    createComponent(nestComponent("store.form")(todoFormObj.config));
    createNestedComponent("store.list", todoListConfig,
      { ActionForm: todoFormObj.Action, services, setup: createTodoList });

    riot.tag("todo-main", `
      <div class="row">
        <div class="col-md-4">
          <todo-form todo="{ store.form.todo }" errors="{ store.form.validationErrors }"></todo-form>
        </div>
        <todo-list todos="{ store.list.todos }"></todo-list>
      </div>`
    );
  };

  return createComponent({ setup });
}
