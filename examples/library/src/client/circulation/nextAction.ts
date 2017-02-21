import { CirculationActions } from "./actions";
import { Model } from "../app";

export function createNextAction(actions: CirculationActions) {
  return function(model: Model, proposal: any): void {
    if (model.tab === "circulation" && proposal.type === "Root.LocationChange" && model.circulation.bookIds.length === 0) {
      actions.loadBookList();
    }
  };
}
