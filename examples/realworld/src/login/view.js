import m from "mithril";
import { defaultTo } from "ramda";

export const createView = actions => ({
  view: vnode => {
    const model = vnode.attrs.model;

    const keys = Object.keys(defaultTo({})(model.errors));
    const errors = keys.map(key => key + " " + model.errors[key][0]);

    return m(".auth-page",
      m(".container page",
        m(".row",
          m(".col-md-6.offset-md-3.col-xs-12",
            m("h1.text-xs-center", "Sign in"),
            m("p.text-xs-center",
              m("a[href='/register']", { oncreate: m.route.link }, "Need an account?")
            ),
            m("form",
              m("ul.error-messages",
                errors.map(message => m("li", message))
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='text'][placeholder='Email']",
                  { value: model.login.email, oninput: actions.updateForm("email") })
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='password'][placeholder='Password']",
                  { value: model.login.password, oninput: actions.updateForm("password") })
              ),
              m("button.btn.btn-lg.btn-primary.pull-xs-right",
                { onclick: actions.login(model) }, "Sign in")
            )
          )
        )
      )
    );
  }
});
