import m from "mithril";

export const createView = () => model =>
  m("footer",
    m(".container",
      m("a.logo-font[href='/']", "conduit"),
      m("span.attribution",
        "An interactive learning project from ",
        m("a[href='https://thinkster.io']", "Thinkster"),
        m.trust(". Code &amp; design licensed under MIT.")
      )
    )
  );
