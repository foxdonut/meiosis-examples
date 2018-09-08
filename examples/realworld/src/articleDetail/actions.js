import O from "patchinko/constant"

import { articlesApi } from "../services"

export const createActions = ({ update }) => ({
  updateCommentField: evt => update({ comment: evt.target.value }),

  addComment: (slug, body) => evt => {
    evt.preventDefault()
    articlesApi.addComment(slug, { comment: { body } }).then(data => update(model => {
      model.comment = ""
      model.comments.unshift(data.comment)
      return model
    }))
  },

  deleteComment: (slug, id) => () => articlesApi.deleteComment(slug, id).then(() =>
    update({ comments: O(comments => comments.filter(comment => comment.id !== id)) })
  )
})
