import { defaultTo, path } from "../util/fp"
import { Route } from "../routes"
import { router } from "../router"

export const PopularTags = ({ state }) => [
  ["p", "Popular Tags"],

  [
    ".tag-list",
    defaultTo([], path(["tags"], state)).map(tag => [
      "a.tag-pill.tag-default",
      { href: router.toPath(Route.Home({ tag })) },
      tag
    ])
  ]
]
