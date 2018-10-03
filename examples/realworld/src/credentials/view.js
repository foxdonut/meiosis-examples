import { compose, constant, path, preventDefault } from "../util/fp"

export const view = options => ({ actions, navigator }) => {
  const updateForm = field => compose(actions.updateForm(field), path(["target", "value"]))

  return model => {
    const errors = Object.keys(model.errors || {}).map(key => key + " " + model.errors[key])

    return [".auth-page",
      [".container page",
        [".row",
          [".col-md-6.offset-md-3.col-xs-12",
            ["h1.text-xs-center", options.label],
            ["p.text-xs-center",
              ["a", { href: navigator.getUrl(options.alternativePage) }, options.alternativeLabel]
            ],

            ["ul.error-messages", errors.map(error => ["li", error])],
            ["form",
              options.showUsername &&
                ["fieldset.form-group",
                  ["input:text.form-control.form-control-lg[placeholder=Username]",
                  //FIXME -- also, clear values when leave the page
                    { value: model.username || "", onInput: updateForm("username") }]
                ],
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Email]",
                  { value: model.email || "", onInput: updateForm("email") }]
              ],
              ["fieldset.form-group",
                ["input:password.form-control.form-control-lg[placeholder=Password]",
                  { value: model.password || "", onInput: updateForm("password") }]
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
