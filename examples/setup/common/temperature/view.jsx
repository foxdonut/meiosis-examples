export const createView = actions => model => (
  <div>
    <div>
      <input type="checkbox" value={model.precipitations}
        onChange={actions.togglePrecipitations} id="precipitations"/>
      <label htmlFor="precipitations">Precipitations</label>
    </div>
    <div>
      Date:
      <input type="text" size="10" value={model.date} onInput={actions.editDate}/>
    </div>
    <span>Temperature: {model.value}&deg;{model.units} </span>
    <div>
      <button className="btn btn-default" onClick={actions.increase(1)}>Increase</button>
      <button className="btn btn-default" onClick={actions.increase(-1)}>Decrease</button>
    </div>
    <div>
      <button className="btn btn-primary" onClick={actions.changeUnits}>Change Units</button>
    </div>
  </div>
);
