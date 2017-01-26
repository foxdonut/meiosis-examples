import { propose } from "meiosis";
import { h } from "preact";

import { Action }  from "./actions";
import { dateView } from "../date/view";
import { entryView } from "../entry/view";
import { temperatureView } from "../temperature/view";

export const view = model => {
  const onSave = _evt => propose(Action.Validate(model));

  return h("div", {},
    h("div", {}, h("span", {}, "h version | "), h("a", { href: "index-jsx.html" }, "JSX version")),
    entryView(model.store.entry),
    dateView(model.store.date),
    temperatureView(model.store.temperature.air),
    temperatureView(model.store.temperature.water),
    h("button", { class: "btn btn-md btn-primary", onClick: onSave }, "Save"),
    h("span", {}, "Saved: " + model.store.saved)
  );
};
