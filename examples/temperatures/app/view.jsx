import preact from "preact";

import { appIntents } from "./actions";
import { dateView } from "../date/view.jsx";
import { entryView } from "../entry/view.jsx";
import { temperatureView } from "../temperature/view.jsx";

export const view = model => {
  return (<div>
    <div>JSX version | <a href="index-h.html">h version</a></div>
    {entryView(model.entry)}
    {dateView(model.date)}
    {temperatureView(model.temperature.air)}
    {temperatureView(model.temperature.water)}
    <button className="btn btn-md btn-primary" onClick={appIntents.save(model)}>Save</button>
    <span>Saved: {model.saved}</span>
  </div>);
};
