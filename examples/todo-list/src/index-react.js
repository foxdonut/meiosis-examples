import { render } from "react-dom";
import flyd from "flyd";
import createServer from "./sinonServer";
import services from "./app/services";
import { app } from "./app/index-react";
import { todoList } from "./todoList/index-react";
import { todoForm } from "./todoForm/index-react";
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

trace({ update, dataStreams: [ model ], otherStreams: [ eventStream ]});
meiosisTracer({ selector: "#tracer" });

const element = document.getElementById("app");
const view = app.createView(update, events);
model.map(model => render(view(model), element));

events.list.pleaseWait(true);
services.loadTodos().then(events.list.todoList);
