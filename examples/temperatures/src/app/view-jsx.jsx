import preact from "preact";

import { nest, save }  from "./index";
import { createDateView } from "../date/view-jsx.jsx";
import { createEntryView } from "../entry/view-jsx.jsx";
import { createTemperatureView } from "../temperature/view-jsx.jsx";

export const view = update => {
  const dateView = createDateView(nest(update, ["date"]));
  const entryView = createEntryView(nest(update, ["entry"]));
  const airTemperatureView = createTemperatureView(nest(update, ["temperature", "air"]));
  const waterTemperatureView = createTemperatureView(nest(update, ["temperature", "water"]));

  return model => (
    <div>
      <div className="row">
        <div className="column column-25">
          <a className="button" href="index-jsx.html">Preact + JSX version</a>
        </div>
        <div className="column column-25">
          <a className="button button-outline" href="index-h.html">Preact + h version</a>
        </div>
      </div>
      <form>
        <fieldset>
          {entryView(model.entry)}
          {dateView(model.date)}
          {airTemperatureView(model.temperature.air)}
          {waterTemperatureView(model.temperature.water)}
          <button onClick={save(model, update)}>Save</button>
          <span>Saved: {model.saved}</span>
        </fieldset>
      </form>
    </div>
  );
};
