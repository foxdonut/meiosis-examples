import React from "react";

import Action from "./actions";

const view = (entryComponent, dateComponent, airTemperature, waterTemperature) => (model, propose) => {
  const onSave = _evt => propose(Action.Validate(model));

  return (<div>
    {entryComponent(model)}
    {dateComponent(model)}
    {airTemperature(model)}
    {waterTemperature(model)}
    <button className="btn btn-md btn-primary" onClick={onSave}>Save</button>
    <span>Saved: {model.store.saved}</span>
  </div>);
};

export default view;
