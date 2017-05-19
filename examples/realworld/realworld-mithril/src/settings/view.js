import m from "mithril";

export const createView = actions => model =>
  m(".settings-page",
    m(".container page",
      m(".row",
        m(".col-md-6.offset-md-3.col-xs-12",
          m("h1.text-xs-center", "Your Settings"),
          m("form",
            m("fieldset",
              m("fieldset.form-group",
                m("input.form-control[type='text'][placeholder='URL of profile picture']")
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='text'][placeholder='Your Name']")
              ),
              m("fieldset.form-group",
                m("textarea.form-control.form-control-lg[rows='8'][placeholder='Short bio about you']")
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='text'][placeholder='Email']")
              ),
              m("fieldset.form-group",
                m("input.form-control.form-control-lg[type='password'][placeholder='Password']")
              ),
              m("button.btn.btn-lg.btn-primary.pull-xs-right", "Update Settings")
            )
          ),
          m("hr"),
          m("button.btn.btn-outline-danger", { onclick: actions.logout }, "Or click here to logout.")
        )
      )
    )
  );
