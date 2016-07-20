import { createComponent } from "meiosis";
import { model } from "./model";
import receive from "./receive";
import services from "./services";
import { createActions } from "./actions";
import createTodoForm from "../todoForm/component-riot";
import createTodoList from "../todoList/component-riot";

const ready = actions => {
  actions.loadList();

  createTodoForm(actions);
  createTodoList(actions);

  Vue.component("todo-main", {
    props: ["root"],
    template: `<div>
      <todo-form :todo="root.todo"></todo-form>
      <todo-list :todos="root.todos" :message="root.message"></todo-list>
    </div>`
  });
};

export default function() {
  const actions = createActions(services);

  return createComponent({
    initialModel: model,
    actions,
    receive: receive,
    ready
  });
}
