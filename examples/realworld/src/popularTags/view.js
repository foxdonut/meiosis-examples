import { defaultTo, path } from "../util/fp"
import { Route, getUrl } from "../util/router"

export const view = () => state => [
  ["p", "Popular Tags"],

  [
    ".tag-list",
    defaultTo([], path(["tags"], state)).map(tag => [
      "a.tag-pill.tag-default",
      { href: getUrl(Route.of.Home(), { tag }) },
      tag
    ])
  ]
]
