import m from "mithril";

export const createView = update => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return m("footer",
      m(".container",
        m("a.logo-font[href='/']", "conduit"),
        m("span.attribution",
          "An interactive learning project from ",
          m("a[href='https://thinkster.io']", "Thinkster"),
          m.trust(". Code &amp; design licensed under MIT.")
        )
      )
    );
  }
});
