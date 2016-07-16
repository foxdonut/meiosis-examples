import initialModel from "./model";
import receive from "./receive";
import services from "./services";
import { createActions } from "./actions";
import Vue from "vue";
import createTodoForm from "../todoForm/component-vue";
import createTodoList from "../todoList/component-vue";

export default function(createComponent) {
  createTodoForm();
  createTodoList();

  Vue.component("todo-main", {
    props: ["model"],
    template: `<div>
      <todo-form :todo="model.todo" :model="model"></todo-form>
      <todo-list :model="model"></todo-list>
    </div>`
  });

  const actions = createActions(services);

  return createComponent({
    initialModel,
    actions,
    receive: receive,
    ready: actions => actions.loadList()
  });
}
