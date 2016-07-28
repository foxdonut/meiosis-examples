import { createComponent } from "meiosis";
import { model } from "./model";
import receive from "./receive";
import services from "./services";
import { createActions } from "./actions";
import Vue from "vue";
import createTodoForm from "../todoForm/component-vue";
import createTodoList from "../todoList/component-vue";

const setup = actions => {
  createTodoForm(actions);
  createTodoList(actions);

  Vue.component("todo-main", {
    props: ["store"],
    template: `<div>
      <todo-form :todo="store.todo"></todo-form>
      <todo-list :todos="store.todos" :message="store.message"></todo-list>
    </div>`
  });
};

const ready = actions => actions.loadList();

export default function() {
  const actions = createActions(services);

  return createComponent({
    initialModel: model,
    actions,
    setup,
    receive,
    ready
  });
}
