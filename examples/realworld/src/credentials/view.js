import { compose, constant, path, preventDefault } from "../util/fp"
import { getUrl } from "../util/router"

export const view = options => ({ actions }) => {
  const updateCredForm = (method, field) =>
    compose(
      actions.updateCredForm(method, field),
      path(["target", "value"])
    )
  const id = options.method

  return state => {
    const errors = Object.keys(state[id].errors || {}).map(key => `${key} ${state[id].errors[key]}`)

    return [
      ".auth-page",
      [
        ".container page",
        [
          ".row",
          [
            ".col-md-6.offset-md-3.col-xs-12",
            ["h1.text-xs-center", options.label],
            [
              "p.text-xs-center",
              ["a", { href: getUrl(options.alternativePage) }, options.alternativeLabel]
            ],

            ["ul.error-messages", errors.map(error => ["li", error])],
            [
              "form",
              options.showUsername && [
                "fieldset.form-group",
                [
                  "input:text.form-control.form-control-lg[placeholder=Username]",
                  { value: state[id].username || "", onInput: updateCredForm(id, "username") }
                ]
              ],
              [
                "fieldset.form-group",
                [
                  "input:text.form-control.form-control-lg[placeholder=Email]",
                  { value: state[id].email || "", onInput: updateCredForm(id, "email") }
                ]
              ],
              [
                "fieldset.form-group",
                [
                  "input:password.form-control.form-control-lg[placeholder=Password]",
                  { value: state[id].password || "", onInput: updateCredForm(id, "password") }
                ]
              ],
              [
                "button.btn.btn-lg.btn-primary.pull-xs-right",
                {
                  onClick: compose(
                    actions.sendCredentials(id),
                    constant(state),
                    preventDefault
                  )
                },
                options.label
              ]
            ]
          ]
        ]
      ]
    ]
  }
}
