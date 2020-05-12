import { constant, path, pipe, preventDefault } from "../util/fp"
import { router } from "../router"

export const Credentials = options => ({ state, actions }) => {
  const updateCredForm = (method, field) =>
    pipe(path(["target", "value"]), actions.updateCredForm(method, field))
  const id = options.method

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
            ["a", { href: router.toPath(options.alternativePage) }, options.alternativeLabel]
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
                onClick: pipe(preventDefault, constant(state), actions.sendCredentials(id))
              },
              options.label
            ]
          ]
        ]
      ]
    ]
  ]
}
