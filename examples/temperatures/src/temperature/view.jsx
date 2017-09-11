import preact from "preact";

const marginRight = {
  marginRight: "4px"
};

export const createView = actions => model => (
  <div className="pure-control-group">
    <label>{model.label}</label>
    <span style={marginRight}>{model.value}</span>
    <button className="pure-button" onClick={actions.changeUnits} style={marginRight}>{"\xB0" + model.units}</button>
    <button className="pure-button" onClick={actions.increase( 1)} style={marginRight}>+</button>
    <button className="pure-button" onClick={actions.increase(-1)}>-</button>
  </div>
);
