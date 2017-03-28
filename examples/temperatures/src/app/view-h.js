import { h } from "preact";

import { nest, save }  from "./index";
import { createDateView } from "../date/view-h";
import { createEntryView } from "../entry/view-h";
import { createTemperatureView } from "../temperature/view-h";

export const view = update => {
  const dateView = createDateView(nest(update, ["date"]));
  const entryView = createEntryView(nest(update, ["entry"]));
  const airTemperatureView = createTemperatureView(nest(update, ["temperature", "air"]));
  const waterTemperatureView = createTemperatureView(nest(update, ["temperature", "water"]));

  return model =>
    h("div", {},
      h("div", { class: "row" },
        h("div", { class: "column column-25" },
          h("a", { class: "button button-outline", href: "index-jsx.html" }, "Preact + JSX version")
        ),
        h("div", { class: "column column-25" },
          h("a", { class: "button", href: "index-h.html" }, "Preact + h version")
        )
      ),
      h("form", {},
        h("fieldset", {},
          entryView(model.entry),
          dateView(model.date),
          airTemperatureView(model.temperature.air),
          waterTemperatureView(model.temperature.water),
          h("button", { onClick: save(model, update) }, "Save"),
          h("span", {}, "Saved: " + model.saved)
        )
      )
    );
};
