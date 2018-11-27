import O from "patchinko/constant"
import { helpers } from "../root/helpers"

export const onNavigate = {
  ArticleCreate: () => ({ navigation, update }) => {
    update(Object.assign({ article: { title: "", description: "", body: "", tags: "" } }, navigation))
  },
  ArticleEdit: ({ slug }) => ({ navigation, update }) => {
    helpers.loadArticle({ slug }).then(data =>
      update(O(data, navigation, { article: O({ tags: (data.article.tagList || []).join(", ") }) })))
  }
}
