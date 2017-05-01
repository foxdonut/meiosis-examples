import m from "mithril";
import { merge } from "ramda";

import { mlink } from "../util";

const profileHref = model => merge({ href: "/profile/" + model.author.username }, mlink());
const articleHref = model => merge({ href: "/article/" + model.slug }, mlink());

export const createView = update => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return m(".article-preview",
      m(".article-meta",
        m("a", profileHref(model), m("img", { src: model.author.image })),
        m(".info",
          m("a.author", profileHref(model), model.author.username),
          m("span.date", new Date(model.createdAt).toDateString())
        ),
        m("button.btn.btn-outline-primary.btn-sm.pull-xs-right",
          m("i.ion-heart"), m("span", " " + model.favoritesCount)
        )
      ),
      m("a.preview-link", articleHref(model),
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
