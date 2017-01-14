import { CirculationActions } from "./actions";
import { Model, Proposal } from "../root";

export function createNextAction(actions: CirculationActions) {
  return function(model: Model, proposal: Proposal): void {
    if (model.tab === "circulation" && proposal.type === "Root.LocationChange" && model.circulation.bookIds.length === 0) {
      actions.loadBookList();
    }
  };
}
