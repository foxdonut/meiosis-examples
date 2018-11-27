import { accept } from "./accept"
import { actions } from "./actions"
import { view } from "./view"
import { onNavigate } from "./onNavigate"
import { Articles } from "../articles"
import { PopularTags } from "../popularTags"

export const Home = {
  dependencies: {
    articles: Articles,
    popularTags: PopularTags
  },
  accept,
  actions,
  view,
  onNavigate
}
