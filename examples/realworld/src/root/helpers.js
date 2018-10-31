import { articlesApi, popularTagsApi, profileApi } from "../services"

export const helpers = {
  loadArticles: params => Promise.all([
    articlesApi.getList(params),
    popularTagsApi.getList()
  ]).then(
    ([articles, tags]) => Object.assign(articles, tags)
  ),

  loadArticle: ({ slug }) => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(
    ([article, comments]) => Object.assign(article, comments)
  ),

  loadFeed: params => articlesApi.getFeed(params),

  loadProfile: ({ username }) => profileApi.get(username)
}
