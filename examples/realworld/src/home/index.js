import { actions } from "./actions"
import { view } from "./view"
import { Articles } from "../articles"
import { PopularTags } from "../popularTags"
//import { articlesApi, popularTagsApi } from "../services"

export const Home = {
  dependencies: {
    articles: Articles,
    popularTags: PopularTags
  },
  actions,
  view
}
