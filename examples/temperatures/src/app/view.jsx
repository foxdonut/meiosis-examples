import preact from "preact";

export const createView = (actions, components) =>
  model => (
    <form className="pure-form pure-form-aligned">
      <fieldset>
        {components.entry(model.entry)}
        {components.date(model.date)}
        {components.airTemperature(model.temperature.air)}
        {components.waterTemperature(model.temperature.water)}

        <button className="pure-button pure-button-primary" onClick={actions.save}>Save</button>
      </fieldset>

      <span>Saved: {model.saved}</span>
    </form>
  );
