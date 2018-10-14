import { compose, preventDefault } from "../util/fp"

export const view = ({ actions }) => model =>
  [".settings-page",
    [".container page",
      [".row",
        [".col-md-6.offset-md-3.col-xs-12",
          ["h1.text-xs-center", "Your Settings"],
          ["form",
            ["fieldset",
              ["fieldset.form-group",
                ["input:text.form-control[placeholder=URL of profile picture]",
                  { value: model.user.image,
                    onInput: evt => actions.updateSettingsForm("image", evt.target.value) }]
              ],
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Your Name]",
                  { value: model.user.username,
                    onInput: evt => actions.updateSettingsForm("username", evt.target.value) }]
              ],
              ["fieldset.form-group",
                ["textarea.form-control.form-control-lg[rows=8][placeholder=Short bio about you]",
                  { value: model.user.bio,
                    onInput: evt => actions.updateSettingsForm("bio", evt.target.value) }]
              ],
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Email]",
                  { value: model.user.email,
                    onInput: evt => actions.updateSettingsForm("email", evt.target.value) }]
              ],
              ["fieldset.form-group",
                ["input:password.form-control.form-control-lg[placeholder=New Password]",
                  { value: model.user.password,
                    onInput: evt => actions.updateSettingsForm("password", evt.target.value) }]
              ],
              ["button.btn.btn-lg.btn-primary.pull-xs-right",
                { onClick: compose(() => actions.updateSettings(model.user), preventDefault) },
                "Update Settings",]
            ]
          ],
          ["hr"],
          ["button.btn.btn-outline-danger",
            { onClick: compose(() => actions.logout(), preventDefault) },
            "Or click here to logout."]
        ]
      ]
    ]
  ]

