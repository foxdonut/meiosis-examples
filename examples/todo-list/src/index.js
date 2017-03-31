import { render } from "inferno";
import flyd from "flyd";
import createServer from "./sinonServer";
import { app } from "./app/index";
import { services } from "./services";
import { todoList } from "./todoList";
import { todoForm } from "./todoForm";
import { applyUpdate, createEvents, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

createServer();

const initialModel = app.model();
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
    "form.saveTodo": ["services.onSaveTodo"],
    "list.deleteTodo": ["services.onDeleteTodo"],
    "list.editTodo": ["form.onEditTodo"],
    "services.deleteTodoFailure": ["list.onError"],
    "services.deleteTodoStart": ["list.onPleaseWait"],
    "services.deleteTodoSuccess": ["list.onDeleteTodo"],
    "services.loadTodosFailure": ["list.onError"],
    "services.loadTodosStart": ["list.onPleaseWait"],
    "services.loadTodosSuccess": ["list.onUpdateTodoList"],
    "services.saveTodoFailure": ["list.onError"],
    "services.saveTodoStart": ["list.onPleaseWait"],
    "services.saveTodoSuccess": ["form.onSaveTodoSuccess", "list.onUpdateTodo"]
  }
});

services.create(update, events.services);

trace({ update, dataStreams: [ model ], otherStreams: [ eventStream ]});
meiosisTracer({ selector: "#tracer" });

const element = document.getElementById("app");
const view = app.create(update, events);
model.map(model => render(view(model), element));

events.services.onLoadTodos(true);
