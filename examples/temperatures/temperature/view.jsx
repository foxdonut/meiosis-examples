import { propose } from "meiosis";
import preact from "preact";

import { Action } from "./actions";

export const temperatureView = model => {
  const withId = (id, obj) => { obj.id = id; return obj; };
  const onChangeUnits = _evt => propose(withId(model.id, Action.ChangeUnits()));
  const onIncrease = _evt => propose(withId(model.id, Action.Increase(1)));
  const onDecrease = _evt => propose(withId(model.id, Action.Decrease(1)));

  return (<div>
    <div>
      <span>{model.label}</span>
      <span>{model.value}</span>
      <button className="btn btn-sm btn-primary" onClick={onChangeUnits}>{"\xB0" + model.units}</button>
      <button className="btn btn-sm btn-default" onClick={onIncrease}>+</button>
      <button className="btn btn-sm btn-default" onClick={onDecrease}>-</button>
    </div>
  </div>);
};
