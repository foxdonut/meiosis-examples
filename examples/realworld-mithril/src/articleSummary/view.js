import m from "mithril";
import { merge } from "ramda";

import { mlink, profileLink } from "../util";

const articleLink = slug => merge({ href: "/article/" + slug }, mlink());

export const createView = update => ({
  view: vnode => {
    const model = vnode.attrs.model;
    const username = model.author.username;

    return m(".article-preview",
      m(".article-meta",
        m("a", profileLink(username), m("img", { src: model.author.image })),
        m(".info",
          m("a.author", profileLink(username), username),
          m("span.date", new Date(model.createdAt).toDateString())
        ),
        m("button.btn.btn-outline-primary.btn-sm.pull-xs-right",
          m("i.ion-heart"), m("span", " " + model.favoritesCount)
        )
      ),
      m("a.preview-link", articleLink(model.slug),
        m("h1", model.title),
        m("p", model.description),
        m("span", "Read more..."),
        m("ul.tag-list",
          model.tagList.map(tag => m("li.tag-default.tag-pill.tag-outline", tag))
        )
      )
    );
  }
});
