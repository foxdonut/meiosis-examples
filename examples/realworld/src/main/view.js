import m from "mithril";

export const createView = update => model =>
  m(".home-page",
    m(".banner",
      m(".container",
        m("h1.logo-font", "conduit"),
        m("p", "A place to share your knowledge.")
      )
    ),
    m(".container page",
      m(".row",
        m(".col-md-9",
          m(".feed-toggle",
            m("ul.nav.nav-pills.outline-active",
              m("li.nav-item",
                m("a.nav-link.disabled[href='']", "Your Feed")
              ),
              m("li.nav-item",
                m("a.nav-link.active[href='']", "Global Feed")
              )
            )
          ),
          m(".article-preview",
            m(".article-meta",
              m("a[href='profile.html']", m("img[src='http://i.imgur.com/Qr71crq.jpg']")),
              m(".info",
                m("f.author[href='']", "Eric Simons"),
                m("span.date", "January 20th")
              ),
              m("button.btn.btn-outline-primary.btn-sm.pull-xs-right",
                m("i.ion-heart"), m("span", " 29")
              )
            ),
            m("a.preview-link[href='']",
              m("h1", "How to build webapps that scale"),
              m("p", "This is the description for the post."),
              m("span", "Read more...")
            )
          ),
          m(".article-preview",
            m(".article-meta",
              m("a[href='profile.html']", m("img[src='http://i.imgur.com/N4VcUeJ.jpg']")),
              m(".info",
                m("f.author[href='']", "Albert Pai"),
                m("span.date", "January 20th")
              ),
              m("button.btn.btn-outline-primary.btn-sm.pull-xs-right",
                m("i.ion-heart"), m("span", " 32")
              )
            ),
            m("a.preview-link[href='']",
              m("h1", "The song you won't ever stop singing. No matter how hard you try."),
              m("p", "This is the description for the post."),
              m("span", "Read more...")
            )
          ),
        ),
        m(".col-md-3",
          m(".sidebar",
            m("p", "Popular Tags"),

            m(".tag-list",
              m("a.tag-pill.tag-default[href='']", "programming"),
              m("a.tag-pill.tag-default[href='']", "javascript"),
              m("a.tag-pill.tag-default[href='']", "emberjs"),
              m("a.tag-pill.tag-default[href='']", "angularjs"),
              m("a.tag-pill.tag-default[href='']", "react"),
              m("a.tag-pill.tag-default[href='']", "mean"),
              m("a.tag-pill.tag-default[href='']", "node"),
              m("a.tag-pill.tag-default[href='']", "rails")
            )
          )
        )
      )
    )
  );
