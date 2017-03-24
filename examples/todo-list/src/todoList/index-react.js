import * as actions from "./actions";
import { model } from "./model";
import { view } from "./view-react";
import { listeners } from "./listeners";

export const todoList = (update, events) => {
  listeners(update, events);

  return view({ update, events });
};

todoList.model = model;
