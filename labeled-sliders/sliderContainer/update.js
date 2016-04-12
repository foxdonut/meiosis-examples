import { append, assoc } from "ramda";
import { Action } from "./action";
import { createLabeledSliderWidget } from "../labeledSlider/widget";

// handler : Model -> [ model, Maybe (Task Action) ]
const handler = model => ({
  NoOp: () => [model],
  AddMeasurement: () => [
    assoc("nextId", model.nextId + 1,
      assoc("measurements", append(createLabeledSliderWidget(model.nextId), model.measurements), model)
    )
  ],
  RemoveMeasurement: id => [
    assoc("measurements", model.measurements.filter(m => m.id !== id), model)
  ]
});

// update : Action -> Model -> [ model, Maybe (Task Action) ]
const update = action => model => Action.case(handler(model), action);

export { update };
