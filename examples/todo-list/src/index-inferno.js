import { render } from "inferno";
import flyd from "flyd";
import createServer from "./sinonServer";
import services from "./app/services";
import { app } from "./app/index-inferno.js";
import { todoList } from "./todoList/index-inferno";
import { todoForm } from "./todoForm/index-inferno";
import { applyModelChange, createEvents, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

createServer();

const initialModel = {
  form: todoForm.model(),
  list: todoList.model()
};

const modelChanges = flyd.stream();
const model = flyd.scan(applyModelChange, initialModel, modelChanges);

const eventStream = flyd.stream();
const events = createEvents({
  eventStream,
  events: {
    form: todoForm.events,
    list: todoList.events
  },
  connect: {
    "form.saveTodoFailure": ["list.error"],
    "form.saveTodoStart": ["list.pleaseWait"],
    "form.saveTodoSuccess": ["list.updateTodo"],
    "list.editTodo": ["form.editTodo"]
  }
});

trace({ modelChanges, dataStreams: [ model ], otherStreams: [ eventStream ]});
meiosisTracer({ selector: "#tracer" });

const element = document.getElementById("app");
const view = app.createView(modelChanges, events);
model.map(model => render(view(model), element));

events.list.pleaseWait(true);
services.loadTodos().then(events.list.todoList);
