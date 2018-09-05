import { /*curryN,*/ defaultTo, prop } from "ramda"

import { T } from "../util"

//const cm = x => y => m(x, y)
// curryN doesn't work here because .map passes 3 args to the function!
//const cm = curryN(2, m)

const displayFieldErrors = errors => ["ul", errors.map(err => ["li", err])]

const getFieldErrors = validationErrors => field =>
  T(defaultTo([], prop(field, defaultTo({}, validationErrors))), displayFieldErrors)

export const createView = actions => model => {
  const fieldErrors = getFieldErrors(model.validationErrors)

  return [".editor-page",
    [".container page",
      [".row",
        [".col-md-10.offset-md-1.col-xs-12",
          ["form",
            ["fieldset",
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Article Title]",
                  { value: model.title, onInput: actions.updateForm("title") }],
                fieldErrors("title")
              ],
              ["fieldset.form-group",
                ["input:text.form-control[placeholder=What's this article about?]",
                  { value: model.description, onInput: actions.updateForm("description") }],
                fieldErrors("description")
              ],
              ["fieldset.form-group",
                ["textarea.form-control[rows=8][placeholder=Write your article (in markdown)]",
                  { value: model.body, onInput: actions.updateForm("body") }],
                fieldErrors("body")
              ],
              ["fieldset.form-group",
                ["input:text.form-control[placeholder=Enter tags]",
                  { value: model.tags, onInput: actions.updateForm("tags") }
                ],
                [".tag-list",
                  model.tagList.map(tag => ["span.tag-pill.tag-default", tag])
                ]
              ],
              ["button:button.btn.btn-lg.pull-xs-right.btn-primary",
                { onClick: actions.publish(model) }, "Publish Article"]
            ]
          ]
        ]
      ]
    ]
  ]
}
