import { CirculationActions, createActions } from "./actions";
import { nextAction } from "./nextAction";
import { BookListModel } from "../root/types";
import { BookServices } from "../services/book";

export function circulation(services: BookServices): any {
  return {
    //actions: createActions(services),
    nextAction
  };
}
