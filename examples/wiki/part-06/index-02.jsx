import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import Immutable from "immutable";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelUpdate =>
  update(model => model.updateIn(path, modelUpdate));

class EntryNumber extends React.PureComponent {
  static model() {
    return {
      value: ""
    };
  }

  componentWillMount() {
    const update = this.props.update;

    const updates = {
      editEntryValue: value => update(model => model.set("value", value))
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
        <input type="text" size="2" value={model.get("value")} onChange={actions.editEntryValue}/>
      </div>
    );
  }
}

class EntryDate extends React.PureComponent {
  static model() {
    return {
      value: ""
    };
  }

  componentWillMount() {
    const update = this.props.update;

    const updates = {
      editDateValue: value => update(model => model.set("value", value))
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
        <input type="text" size="10" value={model.get("value")} onChange={actions.editDateValue}/>
      </div>
    );
  }
}

class Temperature extends React.PureComponent {
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
        model.update("value", v => v + value)),

      changeUnits: () => update(model => {
        if (model.get("units") === "C") {
          return model.set("units", "F").
            set("value", Math.round( model.get("value") * 9 / 5 + 32 ));
        }
        else {
          return model.set("units", "C").
            set("value", Math.round( (model.get("value") - 32) / 9 * 5 ));
        }
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
    console.log("render Temperature", this.props.model.get("label"));
    const model = this.props.model;
    const actions = this.actions;

    return (
      <div className="row">
        <div className="col-md-3">
          <span>
            {model.get("label")} Temperature:
            {model.get("value")}&deg;{model.get("units")}
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

class App extends React.PureComponent {
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
      temperature.get("label") + ": " +
      temperature.get("value") + "\xB0" + temperature.get("units");

    const updates = {
      save: () => update(model => {
        return model.
          set("saved", "Entry #" + model.getIn(["entry", "value"]) +
            " on " + model.getIn(["date", "value"]) + ":" +
            " Temperatures: " +
            displayTemperature(model.getIn(["temperature", "air"])) + " " +
            displayTemperature(model.getIn(["temperature", "water"]))).
          setIn(["entry", "value"], "").
          setIn(["date", "value"], "");
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
        <EntryNumber model={model.get("entry")} update={nests.entry} />
        <EntryDate model={model.get("date")} update={nests.date} />
        <Temperature model={model.getIn(["temperature", "air"])} update={nests.temperature.air} />
        <Temperature model={model.getIn(["temperature", "water"])} update={nests.temperature.water} />
        <div>
          <button className="btn btn-primary" onClick={actions.save}>Save</button>{" "}
          <span>{model.get("saved")}</span>
        </div>
      </form>
    );
  }
}

const update = flyd.stream();
const models = flyd.scan((model, modelUpdate) => modelUpdate(model), Immutable.fromJS(App.model()), update);

const element = document.getElementById("app");
ReactDOM.render(<App models={models} update={update} />, element);

trace({ update, dataStreams: [ models ], fromJS: Immutable.fromJS, toJS: Immutable.toJS });
meiosisTracer({ selector: "#tracer" });
