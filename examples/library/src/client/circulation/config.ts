import { view } from "./view";
import { CirculationActions, createActions } from "./actions";
import { nextAction } from "./nextAction";
import { ComponentConfig, BookListModel } from "../root/types";
import { BookServices } from "../services/book";

function circulationConfig(services: BookServices): ComponentConfig<BookListModel, CirculationActions> {
  return {
    view,
    actions: createActions(services),
    nextAction
  };
}

export { circulationConfig };
