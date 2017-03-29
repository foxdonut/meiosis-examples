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
    h("div", { class: "max-width-4" },
      h("div", { class: "clearfix" },
        h("div", { class: "col px2" },
          h("a", { class: "btn", href: "index-jsx.html" }, "Preact + JSX + Milligram")
        ),
        h("div", { class: "col" },
          h("a", { class: "btn white bg-blue", href: "index-h.html" }, "Preact + h + Basscss")
        )
      ),
      h("form", {},
        h("fieldset", {},
          entryView(model.entry),
          dateView(model.date),
          airTemperatureView(model.temperature.air),
          waterTemperatureView(model.temperature.water),
          h("button", { class: "btn btn-primary mr1", onClick: save(model, update) }, "Save"),
          h("span", {}, "Saved: " + model.saved)
        )
      )
    );
};
