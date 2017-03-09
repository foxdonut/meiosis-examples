import preact from "preact";

import { changeUnits, increase } from "./actions";

export const temperatureView = (model, update) => {
  return (<div>
    <div>
      <span>{model.label}</span>
      <span>{model.value}</span>
      <button className="btn btn-sm btn-primary" onClick={changeUnits(model, update)}>{"\xB0" + model.units}</button>
      <button className="btn btn-sm btn-default" onClick={increase(model, update, 1)}>+</button>
      <button className="btn btn-sm btn-default" onClick={increase(model, update,-1)}>-</button>
    </div>
  </div>);
};
