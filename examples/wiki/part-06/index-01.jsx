import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelUpdate =>
  update(model => _.update(model, path, modelUpdate));

class EntryNumber extends React.Component {
  static model() {
    return {
      value: ""
    };
  }

  componentWillMount() {
    const update = this.props.update;

    const updates = {
      editEntryValue: value => update(model => _.set(model, "value", value))
    };

    this.actions = {
      editEntryValue: evt => updates.editEntryValue(evt.target.value)
    };
  }

  render() {
    console.log("render Entry");
    const model = this.props.model;
    const actions = this.actions;

    return (
      <div>
        <span>Entry number:</span>
        <input type="text" size="2" value={model.value} onChange={actions.editEntryValue}/>
      </div>
    );
  }
}

class EntryDate extends React.Component {
  static model() {
    return {
      value: ""
    };
  }

  componentWillMount() {
    const update = this.props.update;

    const updates = {
      editDateValue: value => update(model => _.set(model, "value", value))
    };

    this.actions = {
      editDateValue: evt => updates.editDateValue(evt.target.value)
    };
  }

  render() {
    console.log("render Date");
    const model = this.props.model;
    const actions = this.actions;

    return (
      <div>
        <span>Date:</span>
        <input type="text" size="10" value={model.value} onChange={actions.editDateValue}/>
      </div>
    );
  }
}

class Temperature extends React.Component {
  static model(label) {
    return {
      label,
      value: 20,
      units: "C"
    };
  }

  componentWillMount() {
    const update = this.props.update;

    const updates = {
      increase: value => update(model =>
        _.update(model, "value", v => v + value)),

      changeUnits: () => update(model => {
        if (model.units === "C") {
          model.units = "F";
          model.value = Math.round( model.value * 9 / 5 + 32 );
        }
        else {
          model.units = "C";
          model.value = Math.round( (model.value - 32) / 9 * 5 );
        }
        return model;
      })
    };

    this.actions = {
      increase: value => evt => {
        evt.preventDefault();
        updates.increase(value);
      },
      changeUnits: evt => {
        evt.preventDefault();
        updates.changeUnits();
      }
    };
  }

  render() {
    console.log("render Temperature", this.props.model.label);
    const model = this.props.model;
    const actions = this.actions;

    return (
      <div className="row">
        <div className="col-md-3">
          <span>
            {model.label} Temperature:
            {model.value}&deg;{model.units}
          </span>
        </div>
        <div className="col-md-6">
          <button className="btn btn-sm btn-default" onClick={actions.increase(1)}>Increase</button>{" "}
          <button className="btn btn-sm btn-default" onClick={actions.increase(-1)}>Decrease</button>{" "}
          <button className="btn btn-sm btn-info" onClick={actions.changeUnits}>Change Units</button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  static model() {
    return {
      entry: EntryNumber.model(),
      date: EntryDate.model(),
      temperature: {
        air: Temperature.model("Air"),
        water: Temperature.model("Water")
      },
      saved: ""
    };
  }

  componentWillMount() {
    this.props.models.map(model => this.setState({model}));

    const update = this.props.update;

    const displayTemperature = temperature =>
      temperature.label + ": " +
      temperature.value + "\xB0" + temperature.units;

    const updates = {
      save: () => update(model => {
        model.saved =
          "Entry #" + model.entry.value +
            " on " + model.date.value + ":" +
            " Temperatures: " +
            displayTemperature(model.temperature.air) + " " +
            displayTemperature(model.temperature.water);
        model.entry.value = "";
        model.date.value = "";
        return model;
      })
    };

    this.actions = {
      save: evt => {
        evt.preventDefault();
        updates.save();
      }
    };

    this.nests = {
      entry: nest(update, ["entry"]),
      date: nest(update, ["date"]),
      temperature: {
        air: nest(update, ["temperature", "air"]),
        water: nest(update, ["temperature", "water"])
      }
    };
  }

  render() {
    console.log("render App");
    const model = this.state.model;
    const actions = this.actions;
    const nests = this.nests;

    return (
      <form>
        <EntryNumber model={model.entry} update={nests.entry} />
        <EntryDate model={model.date} update={nests.date} />
        <Temperature model={model.temperature.air} update={nests.temperature.air} />
        <Temperature model={model.temperature.water} update={nests.temperature.water} />
        <div>
          <button className="btn btn-primary" onClick={actions.save}>Save</button>{" "}
          <span>{model.saved}</span>
        </div>
      </form>
    );
  }
}

const initialModel = App.model();
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
ReactDOM.render(<App models={models} update={update} />, element);


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
