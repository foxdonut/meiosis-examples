import m from "mithril";
import { assoc, defaultTo, path } from "ramda";

import { mlink } from "../util";

export const createView = (actions, options) => ({
  view: vnode => {
    const model = vnode.attrs.model;

    const orEmpty = defaultTo([]);
    const errors = ["username", "email", "password"].reduce(
      (acc, field) =>
        assoc(field, orEmpty(path(["errors", field], model)), acc),
      {});

    return m(".auth-page",
      m(".container page",
        m(".row",
          m(".col-md-6.offset-md-3.col-xs-12",
            m("h1.text-xs-center", options.label),
            m("p.text-xs-center",
              m("a[href='" + options.alternativeLink + "']", mlink(), options.alternativeLabel)
            ),
            m("form",
              options.showUsername &&
                m("fieldset.form-group",
                  m("input.form-control.form-control-lg[type='text'][placeholder='Username']",
                    { value: model.username, oninput: actions.updateForm("username") }),
                  m("ul.error-messages",
                    errors.username.map(message => m("li", "username " + message))
                  )
                ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='text'][placeholder='Email']",
                  { value: model.email, oninput: actions.updateForm("email") }),
                m("ul.error-messages",
                  errors.email.map(message => m("li", "email " + message))
                )
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='password'][placeholder='Password']",
                  { value: model.password, oninput: actions.updateForm("password") }),
                m("ul.error-messages",
                  errors.password.map(message => m("li", "password " + message))
                )
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
