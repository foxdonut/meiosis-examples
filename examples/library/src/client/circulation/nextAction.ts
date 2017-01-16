import { CirculationActions } from "./actions";
import { Model, Proposal } from "../root";

export function createNextAction(actions: CirculationActions) {
  return function(context: any): void {
    const model: Model = context.model;
    const proposal: Proposal = context.proposal;

    if (model.tab === "circulation" && proposal.type === "Root.LocationChange" && model.circulation.bookIds.length === 0) {
      actions.loadBookList();
    }
  };
}
