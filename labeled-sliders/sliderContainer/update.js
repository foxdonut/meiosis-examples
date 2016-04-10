import { append, assoc } from "ramda";
import { Action } from "./action";

// handler : Model -> [ model, Maybe (Task Action) ]
const handler = _services => model => ({
  NoOp: () => [model],
  AddMeasurement: () => [assoc("measurements", append(null, model.measurements), model)],
  RemoveMeasurement: _index => [model]
});

// update : Services -> Action -> Model -> [ model, Maybe (Task Action) ]
const update = services => action => model => Action.case(handler(services)(model), action);

export { update };
