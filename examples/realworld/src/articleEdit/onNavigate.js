import { P, PS } from "patchinko/explicit"
import { helpers } from "../root/helpers"

export const onNavigate = {
  ArticleCreate: () => ({ navigation, update }) => {
    update(
      Object.assign({ article: { title: "", description: "", body: "", tags: "" } }, navigation)
    )
  },
  ArticleEdit: ({ slug }) => ({ navigation, update }) => {
    helpers.loadArticle({ slug }).then(data =>
      //FIXME
      update(
        P(data, navigation, { article: PS({ tags: (data.article.tagList || []).join(", ") }) })
      )
    )
  }
}
