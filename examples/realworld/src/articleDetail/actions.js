import O from "patchinko/constant"

import { articlesApi } from "../services"
import { prepend } from "../util/fp"

export const actions = update => ({
  // FIXME: use id for articleDetail
  updateCommentField: comment => update({ articleDetail: O({ comment }) }),

  addComment: (slug, body) => {
    articlesApi.addComment(slug, { comment: { body } }).then(data => update({
      articleDetail: O({ comment: "", comments: O(list => prepend(data.comment, list)) })
    }))
  },

  deleteComment: (slug, id) => () => articlesApi.deleteComment(slug, id).then(() =>
    update({
      articleDetail: O({
        comments: O(list => list.filter(comment => comment.id !== id))
      })
    })
  )
})
