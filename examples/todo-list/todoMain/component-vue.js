import { createComponent } from "meiosis";
import Vue from "vue";
import { compose } from "ramda";

import nestComponent from "../util/nest-component";
import services from "./services";
import todoFormMain from "../todoForm/main";
import createTodoForm from "../todoForm/component-vue";
import todoListConfig from "../todoList/main";
import createTodoList from "../todoList/component-vue";

export default function() {
  const setup = () => {
    const createNestedComponent = (path, config, params) =>
      compose(createComponent, nestComponent(path), config)(params);

    const todoFormParams = { services, setup: createTodoForm };
    const todoFormObj = todoFormMain(todoFormParams);

    createComponent(nestComponent("store.form")(todoFormObj.config));
    createNestedComponent("store.list", todoListConfig,
      { ActionForm: todoFormObj.Action, services, setup: createTodoList });

    Vue.component("todo-main", {
      props: ["store"],
      template: `<div>
        <div class="row">
          <div class="col-md-4">
            <todo-form :todo="store.form.todo" :errors="store.form.validationErrors"></todo-form>
          </div>
        </div>
        <todo-list :todos="store.list.todos" :message="store.message"></todo-list>
      </div>`
    });
  };

  let model = null;
  createComponent({ initialModel: m => { model = m; return m; }, setup });
  return model;
}
