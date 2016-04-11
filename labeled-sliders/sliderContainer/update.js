import { append, assoc } from "ramda";
import { Action } from "./action";

// handler : Model -> [ model, Maybe (Task Action) ]
const handler = _services => model => ({
  NoOp: () => [model],
  AddMeasurement: () => [
    assoc("nextId", model.nextId + 1,
      assoc("measurements", append({id: model.nextId}, model.measurements), model)
    )
  ],
  RemoveMeasurement: id => [
    assoc("measurements", model.measurements.filter(m => m.id !== id), model)
  ]
});

// update : Services -> Action -> Model -> [ model, Maybe (Task Action) ]
const update = services => action => model => Action.case(handler(services)(model), action);

export { update };
