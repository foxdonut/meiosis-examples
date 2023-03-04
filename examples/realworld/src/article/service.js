import { loadArticleAndComments } from '../services';
import { Route } from '../router';

export const service = {
  onchange: (state) => state.route.value,
  run: (cell) => {
    if (cell.state.route.value === Route.ArticleCreate) {
      cell.update({
        article: {
          title: '',
          description: '',
          body: '',
          tags: '',
          tagList: [],
          validationErrors: []
        }
      });
    } else if ([Route.ArticleDetail, Route.ArticleEdit].includes(cell.state.route.value)) {
      const { slug } = cell.state.route.params;
      loadArticleAndComments({ slug }).then((data) =>
        cell.update([data, { article: { tags: (data.article.tagList || []).join(', ') } }])
      );
    }
  }
};
