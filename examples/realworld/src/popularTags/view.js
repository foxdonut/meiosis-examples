import { compose, constant } from "crocks"
import { preventDefault } from "../util"

export const createView = actions => model => [
  ["p", "Popular Tags"],

  [".tag-list", model.tags.map(tag =>
    ["a.tag-pill.tag-default[href='']",
      { onClick: compose(actions.tagFilter, constant(tag), preventDefault) },
      tag
    ]
  )]
]
