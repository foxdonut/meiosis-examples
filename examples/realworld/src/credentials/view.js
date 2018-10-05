import { compose, constant, path, preventDefault } from "../util/fp"

export const view = options => ({ actions }) => {
  const updateForm = (method, field) => compose(actions.updateForm(method, field), path(["target", "value"]))
  const id = options.method

  return model => {
    const errors = Object.keys(model[id].errors || {}).map(key => key + " " + model[id].errors[key])

    return [".auth-page",
      [".container page",
        [".row",
          [".col-md-6.offset-md-3.col-xs-12",
            ["h1.text-xs-center", options.label],
            ["p.text-xs-center",
              ["a", { href: actions.getUrl(options.alternativePage) }, options.alternativeLabel]
            ],

            ["ul.error-messages", errors.map(error => ["li", error])],
            ["form",
              options.showUsername &&
                ["fieldset.form-group",
                  ["input:text.form-control.form-control-lg[placeholder=Username]",
                  //FIXME -- also, clear values when leave the page
                    { value: model[id].username || "", onInput: updateForm(id, "username") }]
                ],
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Email]",
                  { value: model[id].email || "", onInput: updateForm(id, "email") }]
              ],
              ["fieldset.form-group",
                ["input:password.form-control.form-control-lg[placeholder=Password]",
                  { value: model[id].password || "", onInput: updateForm(id, "password") }]
              ],
              ["button.btn.btn-lg.btn-primary.pull-xs-right",
                { onClick: compose(actions.sendCredentials, constant(model), preventDefault) },
                options.label
              ]
            ]
          ]
        ]
      ]
    ]
  }
}
