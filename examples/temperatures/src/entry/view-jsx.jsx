import preact from "preact";
import { createActions } from "./actions";

export const createEntryView = update => {
  const actions = createActions(update);

  return model => {
    const error = model.errors && model.errors.value[0];

    return (<div>
      <label>Entry number:</label>
      <input type="text" size="2" value={model.value} onInput={actions.editEntryValue} />
      <span>{error}</span>
    </div>);
  };
};
