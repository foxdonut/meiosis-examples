import { h } from "preact";

import { save }  from "./index";
import { dateView } from "../date/view-h";
import { entryView } from "../entry/view-h";
import { temperatureView } from "../temperature/view-h";

export const view = (model, actions) =>
  h("div", {},
    h("ul", { class: "nav nav-pills" },
      h("li", { role: "presentation" },
        h("a", { class: "btn btn-xs btn-default", href: "index-jsx.html" }, "Preact + JSX version")
      ),
      h("li", { class: "active", role: "presentation" },
        h("a", { class: "btn btn-xs btn-default", href: "index-h.html" }, "Preact + h version")
      )
    ),
    entryView(model.entry, actions.entry),
    dateView(model.date, actions.date),
    temperatureView(model.temperature.air, actions.temperature.air),
    temperatureView(model.temperature.water, actions.temperature.water),
    h("button", { class: "btn btn-md btn-primary", onClick: save(model, actions.app) }, "Save"),
    h("span", {}, "Saved: " + model.saved)
  );
