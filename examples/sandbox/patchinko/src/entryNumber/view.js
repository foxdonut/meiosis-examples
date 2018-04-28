import m from "mithril";
import _ from "lodash";

export const createView = actions => model =>
  m(".pure-control-group",
    m("label[for='entry']", "Entry number:"),
    m("input[id='entry'][type='text'][size='2']",
      { value: model.value, oninput: actions.editEntryValue }),
    m("span.pure-form-message-inline", _.get(model, ["errors", "value"]))
  );
