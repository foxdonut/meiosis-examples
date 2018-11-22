import { accept } from "./accept"
import { actions } from "./actions"
import { view } from "./view"
import { navigate } from "./navigate"
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
  navigate
}
