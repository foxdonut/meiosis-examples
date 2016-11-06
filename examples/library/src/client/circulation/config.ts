import { CirculationActions, createActions } from "./actions";
import { nextAction } from "./nextAction";
import { ComponentConfig, BookListModel, View } from "../root/types";
import { BookServices } from "../services/book";

function circulationConfig<V>(services: BookServices, view: View<BookListModel, V, CirculationActions>):
  ComponentConfig<BookListModel, V, CirculationActions>
{
  return {
    view,
    actions: createActions(services),
    nextAction
  };
}

export { circulationConfig };
