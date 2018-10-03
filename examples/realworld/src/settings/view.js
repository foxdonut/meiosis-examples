export const view = ({ actions }) => _model =>
  [".settings-page",
    [".container page",
      [".row",
        [".col-md-6.offset-md-3.col-xs-12",
          ["h1.text-xs-center", "Your Settings"],
          ["form",
            ["fieldset",
              ["fieldset.form-group",
                ["input:text.form-control[placeholder=URL of profile picture]"]
              ],
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Your Name]"]
              ],
              ["fieldset.form-group",
                ["textarea.form-control.form-control-lg[rows=8][placeholder=Short bio about you]"]
              ],
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Email]"]
              ],
              ["fieldset.form-group",
                ["input:password.form-control.form-control-lg[placeholder=Password]"]
              ],
              ["button.btn.btn-lg.btn-primary.pull-xs-right", "Update Settings"]
            ]
          ],
          ["hr"],
          ["button.btn.btn-outline-danger", { onClick: actions.logout },
            "Or click here to logout."]
        ]
      ]
    ]
  ]

