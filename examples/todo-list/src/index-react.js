import { render } from "react-dom";
import flyd from "flyd";
import createServer from "./sinonServer";
import services from "./app/services";
import { nest } from "./util/nest";
import { app } from "./app/index-react";
import { todoList } from "./todoList/index-react";
import { todoForm } from "./todoForm/index-react";
import { applyModelChange, trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

createServer();

//FIXME
const initialModel = {
  form: todoForm.model(),
  list: todoList.model()
};

const modelChanges = flyd.stream();
const model = flyd.scan(applyModelChange, initialModel, modelChanges);

// This function would go into Meiosis.
const createEvents = evts => {
  const createEventFor = (section, eventStream, created, prefix) => {
    Object.keys(section).forEach(key => {
      created[key] = {};

      if (section[key].length) {
        section[key].forEach(sectionKey => {
          const type = prefix + sectionKey;

          const fn = data => eventStream({ type, data });

          fn.map = callback => eventStream.map(event => {
            if (event.type === type) {
              callback(event.data);
            }
          });

          created[key][sectionKey] = fn;
        });
      }
      else {
        createEventFor(section[key], eventStream, created[key], prefix + key + ".");
      }
    });

    return created;
  };

  return createEventFor(evts, flyd.stream(), {}, "");
};

const events = createEvents({
  form: [
    "saveTodoStart",
    "saveTodoSuccess",
    "saveTodoFailure"
  ],
  list: [
    "loadingPleaseWait",
    "todoList",
    "editTodo"
  ]
});

trace({ streamLibrary: flyd, modelChanges, streams: [ model ]});
meiosisTracer({ selector: "#tracer" });

const element = document.getElementById("app");
const view = app(modelChanges, events).view;
model.map(model => render(view(model), element));

events.list.loadingPleaseWait(true);
services.loadTodos().then(events.list.todoList);
