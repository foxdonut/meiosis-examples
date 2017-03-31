import preact from "preact";
import { createActions } from "./actions";

export const createTemperatureView = update => {
  const actions = createActions(update);

  return model => (
    <div>
      <div>
        <span>{model.label}</span>
        <span>{model.value}</span>
        <button onClick={actions.changeUnits}>{"\xB0" + model.units}</button>
        <button className="button-outline" onClick={actions.increase( 1)}>+</button>
        <button className="button-outline" onClick={actions.increase(-1)}>-</button>
      </div>
    </div>
  );
};
