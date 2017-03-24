import services from "../app/services";
import { actions } from "./actions";
import { model } from "./model";
import { view } from "./view-react";
import { listeners } from "./listeners";

//FIXME
export const todoForm = (update, events) => ({
  view: view(update, events, actions(services))
});

todoForm.model = model;
