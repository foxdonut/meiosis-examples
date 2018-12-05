import preact, { Component } from "preact";
import { model } from "./model";
import { actions } from "./actions";

const marginRight = {
  marginRight: "4px"
};

export const temperature = {
  model,
  actions
};

export class Temperature extends Component {
  render(props) {
    const { model, id, actions } = props;
    return (
      <div className="pure-control-group">
        <label>{model[id].label}</label>
        <span style={marginRight}>{model[id].value}</span>
        <button className="pure-button" onClick={actions.changeUnits(id)} style={marginRight}>
          {"\xB0" + model[id].units}
        </button>
        <button className="pure-button" onClick={actions.increase(id,  1)} style={marginRight}>
          +
        </button>
        <button className="pure-button" onClick={actions.increase(id, -1)}>
          -
        </button>
      </div>
    );
  }
}
