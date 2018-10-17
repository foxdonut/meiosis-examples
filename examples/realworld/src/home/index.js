import { actions } from "./actions"
import { view } from "./view"
import { Articles } from "../articles"
import { PopularTags } from "../popularTags"

export const Home = {
  pageId: "HomePage",
  navigateTo: () => ({ pageId: Home.pageId, url: "#/", loading: true }),
  dependencies: {
    articles: Articles,
    popularTags: PopularTags
  },
  actions,
  view
}
