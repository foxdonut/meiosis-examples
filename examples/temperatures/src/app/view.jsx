import preact from "preact";

export const createView = (actions, components) => model => (
  <form className="pure-form pure-form-aligned">
    <fieldset>
      {components.entryNumber.view(model)}
      {components.entryDate.from.view(model)}
      {components.entryDate.to.view(model)}
      {components.temperature.air.view(model)}
      {components.temperature.water.view(model)}

      <button className="pure-button pure-button-primary" onClick={actions.save}>Save</button>
    </fieldset>

    <span>Saved: {model.saved}</span>
  </form>
);
