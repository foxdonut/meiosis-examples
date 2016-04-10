import { assoc } from "ramda";
import { Action } from "./action";

// handler : Model -> [ model, Maybe (Task Action) ]
const handler = _services => model => ({
  NoOp: () => [model],
  Update: value => [assoc("value", value, model)]
});

// update : Services -> Action -> Model -> [ model, Maybe (Task Action) ]
const update = services => action => model => Action.case(handler(services)(model), action);

export { update };
