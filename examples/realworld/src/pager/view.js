import { range } from "../util/fp"
import { getArticlesFilter } from "../routes"
import { router } from "../router"

export const Pager = ({ state, routing }) => {
  const filter = getArticlesFilter(state.route)
  const currentPageNumber = filter.offset / filter.limit + 1
  const pageList = range(1, Math.ceil(state.articlesCount / filter.limit) + 1)
  const from = filter.offset + 1
  const to = Math.min(from + filter.limit - 1, state.articlesCount)
  const params = routing.localSegment.params

  return [
    "nav",
    [
      "ul.pagination",
      pageList.map(pageNumber => [
        "li.page-item",
        { className: { active: pageNumber === currentPageNumber } },
        [
          "a.page-link",
          {
            href: router.toPath(
              routing.sameRoute(
                Object.assign({}, params, {
                  offset: (pageNumber - 1) * filter.limit
                })
              )
            )
          },
          pageNumber
        ]
      ])
    ],
    state.articlesCount > 0
      ? ["div", "Displaying ", from, " - ", to, " of ", state.articlesCount]
      : ["div", "No articles here... yet."]
  ]
}
