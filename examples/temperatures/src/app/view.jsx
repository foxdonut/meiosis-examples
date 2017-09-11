import preact from "preact";

export const createView = (actions, components) => model => (
  <form className="pure-form pure-form-aligned">
    <fieldset>
      {components.entry.view(model)}
      {components.date.view(model)}
      {components.temperature.air.view(model)}
      {components.temperature.water.view(model)}

      <button className="pure-button pure-button-primary" onClick={actions.save}>Save</button>
    </fieldset>

    <span>Saved: {model.saved}</span>
  </form>
);
