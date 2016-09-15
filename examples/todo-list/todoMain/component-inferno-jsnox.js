import { createComponent } from "meiosis";
import { compose } from "ramda";

import nestComponent from "../util/nest-component";
import view from "./view-inferno-jsnox.js";
import services from "./services";

import todoFormView from "../todoForm/view-inferno-jsnox.js";
import todoFormMain from "../todoForm/main";
import todoListView from "../todoList/view-inferno-jsnox.js";
import todoListConfig from "../todoList/main";

export default function() {
  const createNestedComponent = (path, config, params) =>
    compose(createComponent, nestComponent(path), config)(params);

  const todoFormParams = { services, view: todoFormView };
  const todoFormObj = todoFormMain(todoFormParams);

  const todoForm = createComponent(nestComponent("store.form")(todoFormObj.config));
  const todoList = createNestedComponent("store.list", todoListConfig,
    { ActionForm: todoFormObj.Action, services, view: todoListView });

  return createComponent({
    view: view(todoForm, todoList)
  });
}
