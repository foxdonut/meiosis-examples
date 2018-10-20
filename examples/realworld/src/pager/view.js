import { range } from "../util/fp"
import { HomePage, getUrl } from "../util/router"

export const view = () => model => {
  const currentPageNumber = (model.offset / model.limit) + 1
  const pageList = range(1, Math.ceil(model.total / model.limit) + 1)

  return ["nav",
    ["ul.pagination",
      pageList.map(pageNumber =>
        ["li.page-item", { className: { "active": pageNumber === currentPageNumber } },
          ["a.page-link",
            { href: getUrl(HomePage, { offset: (pageNumber - 1) * model.limit }) },
            pageNumber
          ]
        ]
      )
    ]
  ]
}
