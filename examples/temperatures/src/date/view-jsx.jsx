import preact from "preact";
import { createActions } from "./actions";

export const createDateView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return (<div>
      <span>Date:</span>
      <input type="text" size="10" value={model.value} onInput={actions.editDateValue} />
      <span className="has-error"><span className="help-block">{error}</span></span>
    </div>);
  };
};
