import { view } from "./view"
import { nextAction } from "./nextAction"
import { Articles } from "../articles"
import { PopularTags } from "../popularTags"

export const Home = {
  dependencies: {
    articles: Articles,
    popularTags: PopularTags
  },
  view,
  nextAction
}
