import React from "react";
import services from "./services";
import { createModel } from "./model";
import { createActions } from "./actions";
import { TodoList } from "./view.jsx";
import { createState } from "./state";

const createTodoList = (render, element, pubsub) => {
  const model = createModel(pubsub);
  const actions = createActions(model.next, services);
  const views = { display: model => render(<TodoList actions={actions} model={model}/>, element) };
  const state = createState(actions, views);

  pubsub.subscribe(model => {
    state.render(model);
    state.nextAction(model);
  });

  pubsub.broadcast(model.model);

  return state;
};

export { createTodoList };
