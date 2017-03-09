import preact from "preact";

import { save }  from "./index";
import { dateView } from "../date/view-jsx.jsx";
import { entryView } from "../entry/view-jsx.jsx";
import { temperatureView } from "../temperature/view-jsx.jsx";

export const view =(model, actions) => (
  <div>
    <ul className="nav nav-pills">
      <li role="presentation" className="active">
        <a className="btn btn-xs btn-default" href="index-jsx.html">Preact + JSX version</a>
      </li>
      <li role="presentation">
        <a className="btn btn-xs btn-default" href="index-h.html">Preact + h version</a>
      </li>
    </ul>
    {entryView(model.entry, actions.entry)}
    {dateView(model.date, actions.date)}
    {temperatureView(model.temperature.air, actions.temperature.air)}
    {temperatureView(model.temperature.water, actions.temperature.water)}
    <button className="btn btn-md btn-primary" onClick={save(model, actions.app)}>Save</button>
    <span>Saved: {model.saved}</span>
  </div>
);
