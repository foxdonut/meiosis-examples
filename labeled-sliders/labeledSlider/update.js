import { assoc } from "ramda";
import { Action } from "./action";

// handler : Model -> Model
const handler = model => ({
  NoOp: () => model,
  Update: value => assoc("value", value, model)
});

// update : (Model, Action) -> [ model, Maybe (Task Action) ]
const update = (model, action) => Action.case(handler(model), action);

export { update };
