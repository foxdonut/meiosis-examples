import { Model, Proposal } from "../root/types";
import { CirculationActions } from "./actions";

export function nextAction(model: Model, proposal: Proposal, actions: CirculationActions): void {
  if (model.tab === "circulation" && proposal.type === "Root.LocationChange" && model.circulation.bookIds.length === 0) {
    actions.loadBookList();
  }
}