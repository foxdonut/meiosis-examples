import m from "mithril";
import { merge } from "ramda";

import { mlink } from "../util";

const profileHref = model => merge({ href: "/profile/" + model.author.username }, mlink());

const articleMeta = article =>
  m(".article-meta",
    m("a[href='']", m("img", { src: article.author.image })),
    m(".info",
      m("a.author[href='']", article.author.username),
      m("span.date", new Date(article.createdAt).toDateString())
    ),
    m("button.btn.btn-sm.btn-outline-secondary",
      m("i.ion-plus-round"),
      m.trust("&nbsp;"),
      "Follow " + article.author.username
    ),
    m.trust("&nbsp;&nbsp;"),
    m("button.btn.btn-sm.btn-outline-primary",
      m("i.ion-heart"),
      m.trust("&nbsp;"),
      "Favorite Post ",
      m("span.counter", "(" + article.favoritesCount + ")")
    )
  );

export const createView = actions => ({
  init: slug => {
    return actions.loadArticle(slug).then(() =>
      actions.loadComments(slug)
    );
  },

  view: vnode => {
    const model = vnode.attrs.model;
    const article = model.article;

    return m(".article-page",
      m(".banner",
        m(".container",
          m("h1", article.title),
          articleMeta(article)
        )
      ),
      m(".container page",
        m(".row.article-content",
          m(".col-md-12",
            m("h2", article.description),
            m("p", article.body)
          )
        ),
        m("hr"),
        m(".article-actions",
          articleMeta(article)
        ),
        m(".row",
          m(".col-xs-12.col-md-8.offset-md-2",
            m("form.card.comment-form",
              m(".card-block",
                m("textarea.form-control", { placeholder: "Write a comment...", rows: "3" })
              ),
              m(".card-footer",
                m("img.comment-author-img", { src: "http://i.imgur.com/Qr71crq.jpg" }),
                m("button.btn.btn-sm.btn-primary", "Post Comment")
              )
            ),
            model.comments.map(comment =>
              m(".card",
                m(".card-block",
                  m("p.card-text", comment.body)
                ),
                m(".card-footer",
                  m("a.comment-author[href='']",
                    m("img.comment-author-img", { src: comment.author.image })
                  ),
                  m.trust("&nbsp;"),
                  m("a.comment-author[href='']", comment.author.username),
                  m("span.date-posted", new Date(comment.createdAt).toDateString()),
                  m("span.mod-options",
                    m("i.ion-edit"),
                    m("i.ion-trash-a")
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});
