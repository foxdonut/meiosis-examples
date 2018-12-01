/* global dateRange */
import m from "mithril";
import stream from "mithril/stream";
import O from "patchinko/overloaded";

const DateRange = dateRange.default;

const createToggle = update => {
  const toggle = () => update({ someOption: O(value => !value) });

  const view = model =>
    m("label",
      m("input[type=checkbox]", { checked: model.someOption, onchange: toggle }),
      " Some Option"
    );

  return { view };
};

const createApp = update => {
  const toggle = createToggle(update);

  const view = vnode =>
    m("div", m(DateRange, {
      onDateSet: ({start, end}) => {
        update({ start, end });
      },
      closeOnDatesSelected: true
    }),
    toggle.view(vnode.attrs.model));

  return { view };
};

const update = stream();
const app = createApp(update);
const models = stream.scan(O, { }, update);
m.mount(document.getElementById("app"), { view: () => m(app, { model: models() }) });

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer";
meiosisTracer({ selector: "#tracer", streams: [ models ]});
models.map(m.redraw);
