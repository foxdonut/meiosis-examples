import m from "mithril";
import stream from "mithril/stream";
import * as R from "ramda";
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const nest = (update, path) => R.compose(update, R.over(R.lensPath(path)));

const nestComponent = (create, update, path) => {
  const component = create(nest(update, path));
  return {
    view: vnode => m(component, { model: R.path(path, vnode.attrs.model) })
  };
};

const EntryNumber = {
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

    return {
      onbeforeupdate: (next, prev) => next.attrs.model !== prev.attrs.model,
      view: vnode => {
        console.log("render Entry");
        const model = vnode.attrs.model;

        return (
          m("div",
            m("span", "Entry number:"),
            m("input[type=text][size=2]", {value: model.value, oninput: actions.editEntryValue})
          )
        );
      }
    };
  }
};

const EntryDate = {
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

    return {
      onbeforeupdate: (next, prev) => next.attrs.model !== prev.attrs.model,
      view: vnode => {
        console.log("render Date");
        const model = vnode.attrs.model;

        return (
          m("div",
            m("span", "Date:"),
            m("input[type=text][size=10]", {value: model.value, oninput: actions.editDateValue})
          )
        );
      }
    };
  }
};

const Temperature = {
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

    return {
      onbeforeupdate: (next, prev) => next.attrs.model !== prev.attrs.model,
      view: vnode => {
        const model = vnode.attrs.model;
        console.log("render Temperature", model.label);

        return (
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
      }
    };
  }
};


const App = {
  model: () => ({
    entry: EntryNumber.model(),
    date: EntryDate.model(),
    temperature: {
      air: Temperature.model("Air"),
      water: Temperature.model("Water")
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
      entry: nestComponent(EntryNumber.create, update, ["entry"]),
      date: nestComponent(EntryDate.create, update, ["date"]),
      temperature: {
        air: nestComponent(Temperature.create, update, ["temperature", "air"]),
        water: nestComponent(Temperature.create, update, ["temperature", "water"])
      }
    };

    return {
      oninit: vnode => {
        vnode.attrs.models.map(model => vnode.state.model = model);
      },
      view: vnode => {
        console.log("render App");
        const model = vnode.state.model;

        return (
          m("form",
            m(components.entry, { model }),
            m(components.date, { model }),
            m(components.temperature.air, { model }),
            m(components.temperature.water, { model }),
            m("div",
              m("button.btn.btn-primary", {onclick: actions.save}, "Save"),
              m("span", " "),
              m("span", model.saved)
            )
          )
        );
      }
    };
  }
};

const initialModel = App.model();
const update = stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = stream.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const app = App.create(update);
m.mount(element, { view: () => m(app, { models }) });


//models.map(m.redraw); // only for tracer
trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });
