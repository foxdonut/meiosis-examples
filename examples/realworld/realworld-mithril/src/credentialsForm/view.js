import m from "mithril";
import { defaultTo } from "ramda";

import { mlink } from "../util";

export const createView = (actions, options) => ({
  view: vnode => {
    const model = vnode.attrs.model;
    const errors = Object.keys(defaultTo({}, model.errors)).map(key => key + " " + model.errors[key]);

    return m(".auth-page",
      m(".container page",
        m(".row",
          m(".col-md-6.offset-md-3.col-xs-12",
            m("h1.text-xs-center", options.label),
            m("p.text-xs-center",
              m("a[href='" + options.alternativeLink + "']", mlink(), options.alternativeLabel)
            ),

            m("ul.error-messages", errors.map(error => m("li", error))),
            m("form",
              options.showUsername &&
                m("fieldset.form-group",
                  m("input.form-control.form-control-lg[type='text'][placeholder='Username']",
                    { value: model.username, oninput: actions.updateForm("username") })
                ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='text'][placeholder='Email']",
                  { value: model.email, oninput: actions.updateForm("email") })
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='password'][placeholder='Password']",
                  { value: model.password, oninput: actions.updateForm("password") })
              ),
              m("button.btn.btn-lg.btn-primary.pull-xs-right",
                { onclick: actions.callback(model) }, options.label)
            )
          )
        )
      )
    );
  }
});
