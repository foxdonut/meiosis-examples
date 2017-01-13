import { Model, Proposal } from "../root/types";
import { CirculationActions } from "./actions";

export function nextAction(context: any): void {
  if (context.model.tab === "circulation" && context.proposal.type === "Root.LocationChange" && context.model.circulation.bookIds.length === 0) {
    context.actions.loadBookList();
  }
}