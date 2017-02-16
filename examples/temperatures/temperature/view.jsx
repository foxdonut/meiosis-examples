import preact from "preact";

import { temperatureIntents } from "./actions";

export const temperatureView = model => {
  return (<div>
    <div>
      <span>{model.label}</span>
      <span>{model.value}</span>
      <button className="btn btn-sm btn-primary" onClick={temperatureIntents.changeUnits(model.id)}>{"\xB0" + model.units}</button>
      <button className="btn btn-sm btn-default" onClick={temperatureIntents.increase(model.id, 1)}>+</button>
      <button className="btn btn-sm btn-default" onClick={temperatureIntents.increase(model.id,-1)}>-</button>
    </div>
  </div>);
};
