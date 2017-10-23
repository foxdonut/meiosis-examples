export const createView = actions => model => (
  <div>
    <div>
      <input type="checkbox" checked={model.precipitations}
        onChange={actions.togglePrecipitations} id="precipitations"/>
      <label htmlFor="precipitations">Precipitations</label>
    </div>
    <div>
      <input type="radio" id="rain" name="precipitation" value="RAIN"
        checked={model.precipitation === "RAIN"}
        onChange={actions.changePrecipitation}/>
      <label htmlFor="rain">Rain</label>

      <input type="radio" id="snow" name="precipitation" value="SNOW"
        checked={model.precipitation === "SNOW"}
        onChange={actions.changePrecipitation}/>
      <label htmlFor="snow">Snow</label>

      <input type="radio" id="sleet" name="precipitation" value="SLEET"
        checked={model.precipitation === "SLEET"}
        onChange={actions.changePrecipitation}/>
      <label htmlFor="sleet">Sleet</label>
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
