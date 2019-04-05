import { helpers } from "../root/helpers"

export const onNavigate = {
  ArticleDetail: ({ slug }) => ({ navigation, update }) => {
    helpers.loadArticle({ slug }).then(data => update(Object.assign(data, navigation)))
  }
}
