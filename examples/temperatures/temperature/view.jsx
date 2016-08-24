import React from "react";

import Action from "./actions";

const view = (id, label) => (model, propose) => {
  const onChangeUnits = _evt => propose({ id, action: Action.ChangeUnits() });
  const onIncrease = _evt => propose({ id, action: Action.Increase(1) });
  const onDecrease = _evt => propose({ id, action: Action.Decrease(1) });

  return (<div>
    <div>
      <span>{label}</span>
      <span>{model.value}</span>
      <button className="btn btn-sm btn-primary" onClick={onChangeUnits}>{"\xB0" + model.units}</button>
      <button className="btn btn-sm btn-default" onClick={onIncrease}>+</button>
      <button className="btn btn-sm btn-default" onClick={onDecrease}>-</button>
    </div>
  </div>);
};

export default view;
