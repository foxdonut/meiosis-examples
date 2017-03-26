import { render } from "react-dom";
import flyd from "flyd";
import createServer from "./sinonServer";
import services from "./app/services";
import { app } from "./app/index-react";
import { todoList } from "./todoList/index-react";
import { todoForm } from "./todoForm/index-react";
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
  emit: {
    form: [
      "saveTodoFailure",
      "saveTodoStart",
      "saveTodoSuccess",
    ],
    list: [
      "editTodo"
    ]
  },
  listen: {
    form: [
      "editTodo"
    ],
    list: [
      "error",
      "pleaseWait",
      "todoList",
      "updateTodo"
    ]
  },
  connect: {
    "form.saveTodoFailure": ["list.error"],
    "form.saveTodoStart": ["list.pleaseWait"],
    "form.saveTodoSuccess": ["list.updateTodo"],
    "list.editTodo": ["form.editTodo"]
  }
});

trace({ streamLibrary: flyd, modelChanges, streams: [ model, eventStream ]});
meiosisTracer({ selector: "#tracer" });

const element = document.getElementById("app");
const view = app.createView(modelChanges, events);
model.map(model => render(view(model), element));

events.list.pleaseWait(true);
services.loadTodos().then(events.list.todoList);
