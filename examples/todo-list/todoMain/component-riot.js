import { createComponent } from "meiosis";
import riot from "riot";
import { model } from "./model";
import receive from "./receive";
import services from "./services";
import { createActions } from "./actions";
import createTodoForm from "../todoForm/component-riot";
import createTodoList from "../todoList/component-riot";

const setup = actions => {
  createTodoForm(actions);
  createTodoList(actions);

  riot.tag("todo-main", `
    <div>
      <todo-form todo="{ store.todo }"></todo-form>
      <todo-list todos="{ store.todos }"></todo-list>
    </div>`
  );
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
