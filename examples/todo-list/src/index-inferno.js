import { render } from "inferno";
import flyd from "flyd";
import createServer from "./sinonServer";
import { app } from "./app/index-inferno.js";
import { services } from "./services";
import { todoList } from "./todoList/index-inferno";
import { todoForm } from "./todoForm/index-inferno";
import { applyUpdate, createEvents, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

createServer();

const initialModel = {
  form: todoForm.model(),
  list: todoList.model()
};

const update = flyd.stream();
const model = flyd.scan(applyUpdate, initialModel, update);

const eventStream = flyd.stream();
const events = createEvents({
  eventStream,
  events: {
    services: services.events,
    form: todoForm.events,
    list: todoList.events
  },
  connect: {
    "form.saveTodo": ["services.saveTodo"],
    "list.deleteTodo": ["services.deleteTodo"],
    "list.editTodo": ["form.editTodo"],
    "services.deleteTodoFailure": ["list.error"],
    "services.deleteTodoStart": ["list.pleaseWait"],
    "services.deleteTodoSuccess": ["list.updateDeletedTodo"],
    "services.loadTodosFailure": ["list.error"],
    "services.loadTodosStart": ["list.pleaseWait"],
    "services.loadTodosSuccess": ["list.updateTodoList"],
    "services.saveTodoFailure": ["list.error"],
    "services.saveTodoStart": ["list.pleaseWait"],
    "services.saveTodoSuccess": ["form.saveTodoSuccess", "list.updateTodo"]
  }
});

services.create(update, events.services);

trace({ update, dataStreams: [ model ], otherStreams: [ eventStream ]});
meiosisTracer({ selector: "#tracer" });

const element = document.getElementById("app");
const view = app.create(update, events);
model.map(model => render(view(model), element));

events.services.loadTodos(true);
