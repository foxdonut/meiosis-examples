import { CirculationActions, createActions } from "./actions";
import { createNextAction } from "./nextAction";
import { BookServices } from "../services/book";

export function createCirculation(services: BookServices): any {
  return {
    nextAction: createNextAction(createActions(services))
  };
}
