import preact from "preact";

export const createView = (actions, components) => model => (
  <form className="pure-form pure-form-aligned">
    <fieldset>
      {components.entryNumber.view(model)}
      {components.entryDateFrom.view(model)}
      {components.entryDateTo.view(model)}
      {components.airTemperature.view(model)}
      {components.waterTemperature.view(model)}

      <button className="pure-button pure-button-primary"
        onClick={actions.save}>Save</button>
    </fieldset>

    <span>Saved: {model.saved}</span>
  </form>
);
