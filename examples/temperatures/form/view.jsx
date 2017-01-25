import { propose } from "meiosis";
import { h } from "preact";

import { Action } from "./actions";
import { dateView } from "../date/view.jsx";
import { entryView } from "../entry/view.jsx";
//import { temperatureView } from "../temperature/view.jsx";

export const view = model => {
  const onSave = _evt => propose(Action.Validate(model));

  return (<div>
    <div>JSX version</div>
    {entryView(model.store.entry)}
    {dateView(model.store.date)}
    {/*temperatureView(model)*/}
    {/*temperatureView(model)*/}
    <button className="btn btn-md btn-primary" onClick={onSave}>Save</button>
    <span>Saved: {model.store.saved}</span>
  </div>);
};
