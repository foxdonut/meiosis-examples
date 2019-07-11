import { compose, preventDefault } from "../util/fp"

export const Settings = ({ state, actions }) => {
  const errors = Object.keys(state.settings.errors || {}).map(
    key => `${key} ${state.settings.errors[key]}`
  )

  return [
    ".settings-page",
    [
      ".container page",
      [
        ".row",
        [
          ".col-md-6.offset-md-3.col-xs-12",
          ["h1.text-xs-center", "Your Settings"],
          ["ul.error-messages", errors.map(error => ["li", error])],
          [
            "form",
            [
              "fieldset",
              [
                "fieldset.form-group",
                [
                  "input:text.form-control[placeholder=URL of profile picture]",
                  {
                    value: state.settings.image,
                    onInput: evt => actions.updateSettingsForm("image", evt.target.value)
                  }
                ]
              ],
              [
                "fieldset.form-group",
                [
                  "input:text.form-control.form-control-lg[placeholder=Your Name]",
                  {
                    value: state.settings.username,
                    onInput: evt => actions.updateSettingsForm("username", evt.target.value)
                  }
                ]
              ],
              [
                "fieldset.form-group",
                [
                  "textarea.form-control.form-control-lg[rows=8][placeholder=Short bio about you]",
                  {
                    value: state.settings.bio,
                    onInput: evt => actions.updateSettingsForm("bio", evt.target.value)
                  }
                ]
              ],
              [
                "fieldset.form-group",
                [
                  "input:text.form-control.form-control-lg[placeholder=Email]",
                  {
                    value: state.settings.email,
                    onInput: evt => actions.updateSettingsForm("email", evt.target.value)
                  }
                ]
              ],
              [
                "fieldset.form-group",
                [
                  "input:password.form-control.form-control-lg[placeholder=New Password]",
                  {
                    value: state.settings.password,
                    onInput: evt => actions.updateSettingsForm("password", evt.target.value)
                  }
                ]
              ],
              [
                "button.btn.btn-lg.btn-primary.pull-xs-right",
                {
                  onClick: compose(
                    () => actions.updateSettings(state.settings),
                    preventDefault
                  )
                },
                "Update Settings"
              ]
            ]
          ],
          ["hr"],
          [
            "button.btn.btn-outline-danger",
            {
              onClick: compose(
                () => actions.logout(),
                preventDefault
              )
            },
            "Or click here to logout."
          ]
        ]
      ]
    ]
  ]
}
