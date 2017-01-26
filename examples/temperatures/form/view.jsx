import { propose } from "meiosis";
import preact from "preact";

import { Action } from "./actions";
import { dateView } from "../date/view.jsx";
import { entryView } from "../entry/view.jsx";
import { temperatureView } from "../temperature/view.jsx";

export const view = model => {
  const onSave = _evt => propose(Action.Validate(model));

  return (<div>
    <div>JSX version | <a href="index-h.html">h version</a></div>
    {entryView(model.store.entry)}
    {dateView(model.store.date)}
    {temperatureView(model.store.temperature.air)}
    {temperatureView(model.store.temperature.water)}
    <button className="btn btn-md btn-primary" onClick={onSave}>Save</button>
    <span>Saved: {model.store.saved}</span>
  </div>);
};
