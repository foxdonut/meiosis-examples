export const createView = actions => model => (
  <div>
    <div>Date: <input type="text" size="10" value={model.get("date")} onChange={actions.editDate}/></div>
    <span>Temperature: {model.get("value")}&deg;{model.get("units")} </span>
    <div>
      <button onClick={actions.increase(1)}>Increase</button>
      <button onClick={actions.increase(-1)}>Decrease</button>
    </div>
    <div>
      <button onClick={actions.changeUnits}>Change Units</button>
    </div>
  </div>
);
