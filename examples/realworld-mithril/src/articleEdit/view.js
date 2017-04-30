import m from "mithril";

export const createView = update => model => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return m(".editor-page",
      m(".container page",
        m(".row",
          m(".col-md-10.offset-md-1.col-xs-12",
            m("form",
              m("fieldset",
                m("fieldset.form-group",
                  m("input.form-control.form-control-lg[type='text'][placeholder='Article Title']")
                ),
                m("fieldset.form-group",
                  m("input.form-control[type='text'][placeholder='What\'s this article about?']")
                ),
                m("fieldset.form-group",
                  m("textarea.form-control[rows='8'][placeholder='Write your article (in markdown)']")
                ),
                m("fieldset.form-group",
                  m("input.form-control[type='text'][placeholder='Enter tags']"),
                  m(".tag-list")
                ),
                m("button.btn.btn-lg.pull-xs-right.btn-primary[type='button']", "Publish Article")
              )
            )
          )
        )
      )
    );
  }
});
