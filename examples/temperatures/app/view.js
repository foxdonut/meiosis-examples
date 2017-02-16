import { h } from "preact";

import { appIntents }  from "./actions";
import { dateView } from "../date/view";
import { entryView } from "../entry/view";
import { temperatureView } from "../temperature/view";

export const view = model => {
  return h("div", {},
    h("div", {}, h("span", {}, "h version | "), h("a", { href: "index-jsx.html" }, "JSX version")),
    entryView(model.entry),
    dateView(model.date),
    temperatureView(model.temperature.air),
    temperatureView(model.temperature.water),
    h("button", { class: "btn btn-md btn-primary", onClick: appIntents.save(model) }, "Save"),
    h("span", {}, "Saved: " + model.saved)
  );
};
