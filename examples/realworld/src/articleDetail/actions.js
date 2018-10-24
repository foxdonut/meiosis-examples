import O from "patchinko/constant"

import { articlesApi } from "../services"
import { prepend } from "../util/fp"

export const actions = update => ({
  updateCommentField: comment => update({ comment }),

  addComment: (slug, body) => {
    articlesApi.addComment(slug, { comment: { body } }).then(data => update({
      comment: "", comments: O(list => prepend(data.comment, list))
    }))
  },

  deleteComment: (slug, id) => () => articlesApi.deleteComment(slug, id).then(() =>
    update({ comments: O(list => list.filter(comment => comment.id !== id)) })
  )
})
