import { propose } from "meiosis";
import preact from "preact";
import jsnox from "jsnox";

import { Action}  from "./actions";
import { dateView } from "../date/view";
import { entryView } from "../entry/view";
//import { temperatureView } from "../temperature/view";

const h = jsnox(preact);

export const view = model => {
  const onSave = _evt => propose(Action.Validate(model));

  return h("div",
    h("div", "h version"),
    entryView(model),
    dateView(model),
    //temperatureView(model),
    //temperatureView(model),
    h("button.btn.btn-md.btn-primary", { onClick: onSave }, "Save"),
    h("span", "Saved: " + model.store.saved)
  );
};
