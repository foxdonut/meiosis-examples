import m from "mithril";

export const createView = update => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return m("footer",
      m(".container",
        m("a.logo-font[href='/']", "conduit"),
        m("span.attribution",
          m("span", "An interactive learning project from "),
          m("a[href='https://thinkster.io']", "Thinkster"),
          m("span", ". Code &amp; design licensed under MIT.")
        )
      )
    );
  }
});
