import { CirculationActions, createActions } from "./actions";
import { nextAction } from "./nextAction";
import { BookListModel } from "../root/types";
import { BookServices } from "../services/book";

function circulationConfig<V>(services: BookServices): any {
  return {
    //actions: createActions(services),
    nextAction
  };
}

export { circulationConfig };
