import m from "mithril";

const profileHref = model =>
  ({ href: "/profile/" + model.author.username, oncreate: m.route.link, onupdate: m.route.link });

const articleHref = model =>
  ({ href: "/article/" + model.slug, oncreate: m.route.link, onupdate: m.route.link })

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
