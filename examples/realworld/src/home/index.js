import { view } from "./view"
import { Articles } from "../articles"
import { PopularTags } from "../popularTags"
//import { articlesApi, popularTagsApi } from "../services"

export const Home = {
  dependencies: {
    articles: Articles,
    popularTags: PopularTags
  },
  view
  /*
    navigating: ({ navigate }) => {
      Promise.all([
        articlesApi.getList(),
        popularTagsApi.get()
      ]).then(
        ([articles, tags]) => {
          update(O(articles, tags))
          navigate()
        }
      )
    }
  */
}
