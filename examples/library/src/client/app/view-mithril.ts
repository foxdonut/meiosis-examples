import * as m from "mithril";
import * as classnames from "classnames";

import { Model } from "../app";
import { circulationView } from "../circulation/view-mithril";

interface TabSpec {
  tab: string;
  label: string;
  content: any;
}

function activeClass(model: Model, tab: string): string {
  return classnames({ active: model.tab === tab });
}

const tabHeader = (model: Model) => (tabSpec: TabSpec) =>
  m("li", { class: activeClass(model, tabSpec.tab) }, [
    m("a", { href: "#/" + tabSpec.tab }, tabSpec.label)
  ]);

function tabContent(model: Model) {
  return function (tabSpec: TabSpec): any {
    return m(".tab-pane", { class: activeClass(model, tabSpec.tab) }, tabSpec.content);
  };
}

export const view = (model: Model): any => {
  const circulationClass = classnames({ active: model.tab === "circulation" });
  const membersClass = classnames({ active: model.tab === "members" });

  const tabSpecs: Array<TabSpec> = [
    { tab: "circulation", label: "Circulation", content: circulationView(model.circulation) },
    { tab: "orders", label: "Orders", content: m("span", "Orders") },
    { tab: "repairs", label: "Repairs", content: m("span", "Repairs") },
    { tab: "books", label: "All Books", content: m("span", "") },
    { tab: "other", label: "Something Else", content: m("span", "Coming soon") }
  ];

  return m("div",
    m("ul.nav.nav-pills", { style: "margin-bottom: 8px" },
      m("li.active", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-mithril.html" }, "Mithril + Bootstrap version")
      ),
      m("li", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-react.html" }, "React + Material-UI version")
      )
    ),
    m("ul.nav.nav-tabs", tabSpecs.map(tabHeader(model))),
    m(".tab-content", tabSpecs.map(tabContent(model)))
    //views.progressDialog(model)
  );
};
