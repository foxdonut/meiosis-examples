import { articlesApi, loadArticlesAndTags } from "../services"
import { pick } from "../util/fp"
import { getArticlesFilter } from "../util/filter"

export const Effect = update => state => {
  const filter = getArticlesFilter(state)

  filter.feed
    ? articlesApi.getFeed(pick(["limit", "offset"], filter)).then(update)
    : loadArticlesAndTags(filter).then(update)
}
