import * as m from "mithril";
const stream = require("mithril/stream");
const scan = require("mithril/stream/scan");

import { EventType, Stream, applyUpdate, createEvents, trace } from "meiosis";
const meiosisTracer = require("meiosis-tracer");

import { Model, Todo } from "./util";
import { app } from "./app/index-mithril";
import { main } from "./main";
import { todoStorage } from "./app/todo-storage";

function startApp() {
  todoStorage.loadAll().then((todos: Array<Todo>) => {
    const prefix = "#";
    const prefixLength = prefix.length;
    const extractRoute = (hash: string) => (hash && hash.substring(prefixLength)) || "/";
    m.route.prefix(prefix);

    const initialModel: Model = {
      editTodo: {},
      newTodo: "",
      todoIds: todos.map((todo: Todo) => todo.id),
      todosById: todos.reduce((acc: { [id: string] : Todo }, todo: Todo) => {
        acc[todo.id] = todo;
        return acc;
      }, {}),
      route: extractRoute(window.location.hash)
    };

    const update: Stream<Function> = stream();
    const model = scan(applyUpdate, initialModel, update);
    const state = model.map(app.state);//.map(router.state);

    const eventStream: Stream<EventType> = stream();
    const events: any = createEvents({
      eventStream,
      events: {
        emit: ["todosToDisplay"],
        listen: ["displayTodos"]
      },
      connect: {
        "todosToDisplay": ["displayTodos"]
      }
    });

    const element = document.getElementById("app");
    const view = app.create(update, events);
    const render = () => view(state());
    const setRoute = (path: string) => update((model: Model) => {
      model.route = path;
      return model;
    });

    m.route(element, "/", {
      "/": {
        onmatch: (args: any, path: string) => {
          setRoute(path);
          todoStorage.loadAll().then(events.todosToDisplay);
        },
        render
      },
      "/active": {
        onmatch: (args: any, path: string) => {
          setRoute(path);
          todoStorage.filter("active").then(events.todosToDisplay);
        },
        render
      },
      "/completed": {
        onmatch: (args: any, path: string) => {
          setRoute(path);
          todoStorage.filter("completed").then(events.todosToDisplay);
        },
        render
      }
    });
    state.map(m.redraw);

    trace({ update, dataStreams: [ model, state ], otherStreams: [ eventStream ]});
    meiosisTracer({ selector: "#tracer" });
  });
}

startApp();
