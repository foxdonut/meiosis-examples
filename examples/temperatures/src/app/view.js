import { h } from "preact";

import { appIntents }  from "./actions";
import { dateView } from "../date/view";
import { entryView } from "../entry/view";
import { temperatureView } from "../temperature/view";

export const view = model => {
  return h("div", {},
    h("ul", { class: "nav nav-pills" },
      h("li", { role: "presentation" },
        h("a", { class: "btn btn-xs btn-default", href: "index-jsx.html" }, "Preact + JSX version")
      ),
      h("li", { class: "active", role: "presentation" },
        h("a", { class: "btn btn-xs btn-default", href: "index-h.html" }, "Preact + h version")
      ),
    ),
    entryView(model.entry),
    dateView(model.date),
    temperatureView(model.temperature.air),
    temperatureView(model.temperature.water),
    h("button", { class: "btn btn-md btn-primary", onClick: appIntents.save(model) }, "Save"),
    h("span", {}, "Saved: " + model.saved)
  );
};
