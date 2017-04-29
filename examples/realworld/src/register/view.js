import m from "mithril";
import { assoc, defaultTo, path } from "ramda";

export const createView = actions => ({
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
            m("h1.text-xs-center", "Sign up"),
            m("p.text-xs-center",
              m("a[href='/login']", { oncreate: m.route.link }, "Have an account?")
            ),
            m("form",
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='text'][placeholder='Username']",
                  { value: model.register.username, oninput: actions.updateForm("username") }),
                m("ul.error-messages",
                  errors.username.map(message => m("li", "username " + message))
                )
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='text'][placeholder='Email']",
                  { value: model.register.email, oninput: actions.updateForm("email") }),
                m("ul.error-messages",
                  errors.email.map(message => m("li", "email " + message))
                )
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='password'][placeholder='Password']",
                  { value: model.register.password, oninput: actions.updateForm("password") }),
                m("ul.error-messages",
                  errors.password.map(message => m("li", "password " + message))
                )
              ),
              m("button.btn.btn-lg.btn-primary.pull-xs-right",
                { onclick: actions.register(model) }, "Sign up")
            )
          )
        )
      )
    );
  }
});
