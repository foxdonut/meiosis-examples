import { compose, constant, defaultTo, path, preventDefault } from "../util/fp"

export const createView = ({ actions }) => model => [
  ["p", "Popular Tags"],

  [".tag-list", defaultTo([], path(["tags"], model)).map(tag =>
    ["a.tag-pill.tag-default[href='']",
      { onClick: compose(actions.tagFilter, constant(tag), preventDefault) },
      tag
    ]
  )]
]
