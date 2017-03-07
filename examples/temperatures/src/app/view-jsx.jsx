import preact from "preact";

import { intents } from "./actions";
import { dateView } from "../date/view-jsx.jsx";
import { entryView } from "../entry/view-jsx.jsx";
import { temperatureView } from "../temperature/view-jsx.jsx";

export const view = model => {
  return (<div>
    <ul className="nav nav-pills">
      <li role="presentation" className="active">
        <a className="btn btn-xs btn-default" href="index-jsx.html">Preact + JSX version</a>
      </li>
      <li role="presentation">
        <a className="btn btn-xs btn-default" href="index-h.html">Preact + h version</a>
      </li>
    </ul>
    {entryView(model.entry)}
    {dateView(model.date)}
    {temperatureView(model.temperature.air)}
    {temperatureView(model.temperature.water)}
    <button className="btn btn-md btn-primary" onClick={intents.save(model)}>Save</button>
    <span>Saved: {model.saved}</span>
  </div>);
};
