import preact from "preact";
import { createActions } from "./actions";

export const createDateView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return (<div>
      <label>Date:</label>
      <input type="text" size="10" value={model.value} onInput={actions.editDateValue} />
      <span>{error}</span>
    </div>);
  };
};
