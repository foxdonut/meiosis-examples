import m from "mithril";
import stream from "mithril/stream";
import R from "ramda";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => R.compose(update, R.over(R.lensPath(path)));

const nestComponent = (create, update, path) => {
  const view = create(nest(update, path));
  return model => view(R.path(path, model));
};

const entryNumber = {
  model: () => ({
    value: ""
  }),

  create: update => {
    const updates = {
      editEntryValue: value => update(R.assoc("value", value))
    };

    const actions = {
      editEntryValue: evt => updates.editEntryValue(evt.target.value)
    };

    let lastModel = null;
    let lastView = null;

    return model => {
      if (lastModel === model) {
        return lastView;
      }
      console.log("render Entry");

      lastModel = model;
      lastView = (
        m("div",
          m("span", "Entry number:"),
          m("input[type=text][size=2]", {value: model.value, oninput: actions.editEntryValue})
        )
      );
      return lastView;
    };
  }
};

const entryDate = {
  model: () => ({
    value: ""
  }),

  create: update => {
    const updates = {
      editDateValue: value => update(R.assoc("value", value))
    };

    const actions = {
      editDateValue: evt => updates.editDateValue(evt.target.value)
    };

    let lastModel = null;
    let lastView = null;

    return model => {
      if (lastModel === model) {
        return lastView;
      }
      console.log("render Date");

      lastModel = model;
      lastView = (
        m("div",
          m("span", "Date:"),
          m("input[type=text][size=10]", {value: model.value, oninput: actions.editDateValue})
        )
      );
      return lastView;
    };
  }
};

const temperature = {
  model: label => ({
    label,
    value: 20,
    units: "C"
  }),

  create: update => {
    const updates = {
      increase: value => update(R.over(R.lensProp("value"), R.add(value))),

      changeUnits: () => update(model => {
        if (model.units === "C") {
          return R.assoc("units", "F",
            R.assoc("value", Math.round( model.value * 9 / 5 + 32 ), model));
        }
        else {
          return R.assoc("units", "C",
            R.assoc("value", Math.round( (model.value - 32) / 9 * 5 ), model));
        }
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

    let lastModel = null;
    let lastView = null;

    return model => {
      if (lastModel === model) {
        return lastView;
      }
      console.log("render Temperature", model.label);

      lastModel = model;
      lastView = (
        m(".row",
          m(".col-md-3",
            m("span", model.label + " Temperature: " + model.value + "\xB0" + model.units)
          ),
          m(".col-md-6",
            m("button.btn.btn-sm.btn-default", {onclick: actions.increase(1)}, "Increase"),
            m("button.btn.btn-sm.btn-default", {onclick: actions.increase(-1)}, "Decrease"),
            m("button.btn.btn-sm.btn-info", {onclick: actions.changeUnits}, "Change Units")
          )
        )
      );
      return lastView;
    };
  }
};


const app = {
  model: () => ({
    entry: entryNumber.model(),
    date: entryDate.model(),
    temperature: {
      air: temperature.model("Air"),
      water: temperature.model("Water")
    },
    saved: ""
  }),

  create: update => {
    const displayTemperature = temperature =>
      temperature.label + ": " +
      temperature.value + "\xB0" + temperature.units;

    const updates = {
      save: () => update(model =>
        R.assoc(
          "saved", "Entry #" + model.entry.value +
            " on " + model.date.value + ":" +
            " Temperatures: " +
            displayTemperature(model.temperature.air) + " " +
            displayTemperature(model.temperature.water),
          R.assocPath(["entry", "value"], "",
          R.assocPath(["date", "value"], "", model))))
    };

    const actions = {
      save: evt => {
        evt.preventDefault();
        updates.save();
      }
    };

    const components = {
      entry: nestComponent(entryNumber.create, update, ["entry"]),
      date: nestComponent(entryDate.create, update, ["date"]),
      temperature: {
        air: nestComponent(temperature.create, update, ["temperature", "air"]),
        water: nestComponent(temperature.create, update, ["temperature", "water"])
      }
    };

    return model => {
      console.log("render App");

      return (
        m("form",
          components.entry(model),
          components.date(model),
          components.temperature.air(model),
          components.temperature.water(model),
          m("div",
            m("button.btn.btn-primary", {onclick: actions.save}, "Save"),
            m("span", " "),
            m("span", model.saved)
          )
        )
      );
    };
  }
};

const initialModel = app.model();
const update = stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const view = app.create(update);
models.map(model => m.render(element, view(model)));


trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });
