import { compose, defaultTo, get, preventDefault, thrush } from "../util/fp"

const displayFieldErrors = errors => ["ul.error-messages", errors.map(err => ["li", err])]

const getFieldErrors = validationErrors => field =>
  thrush(defaultTo([], get(defaultTo({}, validationErrors), [field])), displayFieldErrors)

export const view = ({ actions }) => state => {
  const article = state.article
  const fieldErrors = getFieldErrors(article && article.validationErrors)

  return !article ? ["img", { src: "/assets/loading.gif" }] : [".editor-page",
    [".container page",
      [".row",
        [".col-md-10.offset-md-1.col-xs-12",
          ["form",
            ["fieldset",
              ["fieldset.form-group",
                ["input:text.form-control.form-control-lg[placeholder=Article Title]",
                  { value: article.title,
                    onInput: evt => actions.updateArticleForm("title", evt.target.value)
                  }],
                fieldErrors("title")
              ],
              ["fieldset.form-group",
                ["input:text.form-control[placeholder=What's this article about?]",
                  { value: article.description,
                    onInput: evt => actions.updateArticleForm("description", evt.target.value)
                  }],
                fieldErrors("description")
              ],
              ["fieldset.form-group",
                ["textarea.form-control[rows=8][placeholder=Write your article (in markdown)]",
                  { value: article.body,
                    onInput: evt => actions.updateArticleForm("body", evt.target.value)
                  }],
                fieldErrors("body")
              ],
              ["fieldset.form-group",
                ["input:text.form-control[placeholder=Enter tags]",
                  { value: article.tags,
                    onInput: evt => actions.updateArticleTags(evt.target.value)
                  }
                ],
                [".tag-list",
                  defaultTo([], article.tagList).map(tag => ["span.tag-pill.tag-default", tag])
                ]
              ],
              ["button:button.btn.btn-lg.pull-xs-right.btn-primary",
                { onClick: compose(() => actions.publish(article), preventDefault) },
                "Publish Article"]
            ]
          ]
        ]
      ]
    ]
  ]
}
