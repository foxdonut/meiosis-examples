import { range } from "../util/fp"
import { getUrl } from "../util/router"

export const view = () => model => {
  const filter = model.articlesFilter
  const currentPageNumber = (filter.offset / filter.limit) + 1
  const pageList = range(1, Math.ceil(model.articlesCount / filter.limit) + 1)

  return ["nav",
    ["ul.pagination",
      pageList.map(pageNumber =>
        ["li.page-item", { className: { "active": pageNumber === currentPageNumber } },
          ["a.page-link",
            { href: getUrl(model.pageId,
              { offset: (pageNumber - 1) * filter.limit,
                tag: filter.tag,
                username: model.profile && model.profile.username
              })
            },
            pageNumber
          ]
        ]
      )
    ]
  ]
}
