import React from "react";
import { model, next } from "./model";
import { createActions } from "./actions";
import { TodoList } from "./view.jsx";
import { createState } from "./state";

const createTodoList = (render, element) => {
  const nextChannel = {
    state: undefined,
    next: data => {
      const model = next(data);
      console.log("render:", model);
      nextChannel.state.render(model);
      nextChannel.state.nextAction(model);
    }
  };
  const actions = createActions(nextChannel.next);
  const views = {
    display: model => render(<TodoList actions={actions} model={model}/>, element)
  };
  const state = createState(actions, views);
  nextChannel.state = state; // this is weak, find a better way

  return state;
};

export { createTodoList, model as todoListModel };
