import { assoc } from "ramda";
import { Action } from "./action";

// handler : Model -> Model
const handler = model => ({
  NoOp: () => model,
  Update: value => assoc("value", value, model)
});

// update : Action -> Model -> [ model, Maybe (Task Action) ]
const update = action => model => Action.case(handler(model), action);

export { update };
