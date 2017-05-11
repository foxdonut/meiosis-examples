import m from "mithril";

export const createView = actions => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return m(".editor-page",
      m(".container page",
        m(".row",
          m(".col-md-10.offset-md-1.col-xs-12",
            m("form",
              m("fieldset",
                m("fieldset.form-group",
                  m("input.form-control.form-control-lg[type='text'][placeholder='Article Title']",
                    { value: model.title, oninput: actions.updateForm("title") })
                ),
                m("fieldset.form-group",
                  m("input.form-control[type='text'][placeholder='What\'s this article about?']",
                    { value: model.description, oninput: actions.updateForm("description") })
                ),
                m("fieldset.form-group",
                  m("textarea.form-control[rows='8'][placeholder='Write your article (in markdown)']",
                    { value: model.body, oninput: actions.updateForm("body") })
                ),
                m("fieldset.form-group",
                  m("input.form-control[type='text'][placeholder='Enter tags']",
                    { value: model.tags, oninput: actions.updateForm("tags") }
                  ),
                  m(".tag-list",
                    model.tagList.map(tag => m("span.tag-pill.tag-default", tag))
                  )
                ),
                m("button.btn.btn-lg.pull-xs-right.btn-primary[type='button']",
                  { onclick: actions.publish(model) }, "Publish Article")
              )
            )
          )
        )
      )
    );
  }
});
