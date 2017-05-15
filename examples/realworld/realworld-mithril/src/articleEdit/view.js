import m from "mithril";
import { /*curryN,*/ defaultTo, prop } from "ramda";

import { T } from "../util";

const cm = x => y => m(x, y);
// curryN doesn't work here because .map passes 3 args to the function!
//const cm = curryN(2, m);

const displayFieldErrors = errors => m("ul", errors.map(cm("li")));

const getFieldErrors = validationErrors => field =>
  T(defaultTo([], prop(field, defaultTo({}, validationErrors))), displayFieldErrors);

export const createView = actions => ({
  view: vnode => {
    const model = vnode.attrs.model;
    const fieldErrors = getFieldErrors(model.validationErrors);

    return m(".editor-page",
      m(".container page",
        m(".row",
          m(".col-md-10.offset-md-1.col-xs-12",
            m("form",
              m("fieldset",
                m("fieldset.form-group",
                  m("input.form-control.form-control-lg[type='text'][placeholder='Article Title']",
                    { value: model.title, oninput: actions.updateForm("title") }),
                  fieldErrors("title")
                ),
                m("fieldset.form-group",
                  m("input.form-control[type='text'][placeholder='What\'s this article about?']",
                    { value: model.description, oninput: actions.updateForm("description") }),
                  fieldErrors("description")
                ),
                m("fieldset.form-group",
                  m("textarea.form-control[rows='8'][placeholder='Write your article (in markdown)']",
                    { value: model.body, oninput: actions.updateForm("body") }),
                  fieldErrors("body")
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
