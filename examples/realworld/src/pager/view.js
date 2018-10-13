import { compose, constant, preventDefault, range } from "../util/fp"

export const view = ({ actions }) => model => {
  const currentPageNumber = (model.offset / model.limit) + 1
  const pageList = range(1, Math.ceil(model.total / model.limit) + 1)

  return ["nav",
    ["ul.pagination",
      pageList.map(pageNumber =>
        ["li.page-item", { className: { "active": pageNumber === currentPageNumber } },
          ["a.page-link[href=#]",
            { onClick: compose(actions.page, constant({ model, pageNumber }), preventDefault) },
            pageNumber
          ]
        ]
      )
    ]
  ]
}
