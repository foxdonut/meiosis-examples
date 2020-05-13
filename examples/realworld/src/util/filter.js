import { assoc, get } from "../util/fp"

export const getArticlesFilter = route => {
  const filter = ["feed", "offset", "tag"].reduce(
    (result, param) => assoc(param, get(route, ["params", "queryParams", param]), result),
    {}
  )
  filter.offset = Number(filter.offset) || 0
  filter.limit = 10

  return filter
}
