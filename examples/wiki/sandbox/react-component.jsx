/*global $*/

import flyd from "flyd";
import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash/fp";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => modelUpdate => update(_.update(path, modelUpdate));

const nestComponent = (create, update, path) => {
  const view = create(nest(update, path));

  // This is equivalent to:
  // return model => view(_.get(path, model));
  return _.flow([_.get(path), view]);
};

const entry = {
  model: () => ({
    value: ""
  }),

  create: update => {
    const updates = {
      editEntryValue: value => update(_.set("value", value))
    };

    const actions = {
      editEntryValue: evt => updates.editEntryValue(evt.target.value)
    };

    return model => (
      <div>
        <span>Entry number:</span>
        <input type="text" size="2" value={model.value} onChange={actions.editEntryValue}/>
      </div>
    );
  }
};

class DateField extends React.Component {
  static model() {
    return {
      value: ""
    };
  }

  componentWillMount() {
    const update = this.props.update;

    const updates = {
      editDateValue: value => update(_.set("value", value))
    };

    this.actions = {
      editDateValue: evt => updates.editDateValue(evt.target.value)
    };
  }

  componentDidMount() {
    const actions = this.actions;

    $(this.refs.dateField).
      datepicker({ autoclose: true }).
      on("hide", actions.editDateValue);
  }

  render() {
    const model = this.props.model;
    const actions = this.actions;

    return (
      <div>
        <span>Date:</span>
        <input ref="dateField" type="text" size="10" value={model.value} onChange={actions.editDateValue}/>
      </div>
    );
  }
}

const temperature = {
  model: label => ({
    label,
    value: 20,
    units: "C"
  }),

  create: update => {
    const updates = {
      increase: value => update(_.update("value", _.add(value))),

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

    const actions = {
      increase: value => evt => {
        evt.preventDefault();
        updates.increase(value);
      },
      changeUnits: evt => {
        evt.preventDefault();
        updates.changeUnits();
      }
    };

    return model => (
      <div className="row">
        <div className="col-md-3">
          <span>{model.label} Temperature: {model.value}&deg;{model.units} </span>
        </div>
        <div className="col-md-6">
          <button className="btn btn-sm btn-default" onClick={actions.increase(1)}>Increase</button>{" "}
          <button className="btn btn-sm btn-default" onClick={actions.increase(-1)}>Decrease</button>{" "}
          <button className="btn btn-sm btn-info" onClick={actions.changeUnits}>Change Units</button>
        </div>
      </div>
    );
  }
};

const app = {
  model: () => ({
    entry: entry.model(),
    date: DateField.model(),
    temperature: {
      air: temperature.model("Air"),
      water: temperature.model("Water")
    },
    saved: ""
  }),

  create: update => {
    const displayTemperature = temperature => temperature.label + ": " +
      temperature.value + "\xB0" + temperature.units;

    const updates = {
      save: () => update(model => {
        model.saved = " Entry #" + model.entry.value +
          " on " + model.date.value + ":" +
          " Temperatures: " +
          displayTemperature(model.temperature.air) + " " +
          displayTemperature(model.temperature.water);

        model.entry.value = "";
        model.date.value = "";

        return model;
      })
    };

    const actions = {
      save: evt => {
        evt.preventDefault();
        updates.save();
      }
    };

    const components = {
      entry: nestComponent(entry.create, update, "entry"),
      temperature: {
        air: nestComponent(temperature.create, update, "temperature.air"),
        water: nestComponent(temperature.create, update, ["temperature", "water"])
      }
    };

    return model => (
      <form>
        {components.entry(model)}
        <DateField model={model.date} update={nest(update, "date")} />
        {components.temperature.air(model)}
        {components.temperature.water(model)}
        <div>
          <button className="btn btn-primary" onClick={actions.save}>Save</button>
          <span>{model.saved}</span>
        </div>
      </form>
    );
  }
};

const initialModel = app.model();
const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const view = app.create(update);
models.map(model => ReactDOM.render(view(model), element));


trace({ update, dataStreams: [ models ] });
meiosisTracer({ selector: "#tracer" });
