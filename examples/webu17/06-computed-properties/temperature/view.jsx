export const createView = actions => model => (
  <div>
    <div>Date: <input type="text" size="10" value={model.date} onChange={actions.editDate}/></div>
    <span>Temperature: {model.value}&deg;{model.units} {model.comment}</span>
    <div>
      <button onClick={actions.increase(1)}>Increase</button>
      <button onClick={actions.increase(-1)}>Decrease</button>
    </div>
    <div>
      <button onClick={actions.changeUnits}>Change Units</button>
    </div>
  </div>
);
