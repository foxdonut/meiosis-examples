import m from "mithril";
import _ from "lodash";

export const createView = actions => model =>
  m(".pure-control-group",
    m("label[for='date']", model.label),
    m("input[id='date'][type='text'][size='10']",
      { value: model.value, oninput: actions.editDateValue }),
    m("span.pure-form-message-inline", _.get(model, ["errors", "value"]))
  );
