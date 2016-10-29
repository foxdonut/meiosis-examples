import * as m from "mithril";
import { Component } from "meiosis";
import * as classnames from "classnames";

import { BookListModel, Model, Propose, RootViews } from "../root/types";
import { VDom, View } from "./types";

interface TabSpec {
  tab: string;
  label: string;
  content: VDom;
}

export function createRootView(views: RootViews<VDom>): View<Model, Propose> {
  const view: View<Model, Propose> = (model: Model, propose: Propose): VDom => {
    function activeClass(tab: string): string {
      return classnames({ active: model.tab === tab });
    }

    function tabHeader(tabSpec: TabSpec): VDom {
      return m("li", { class: activeClass(tabSpec.tab) }, [
        m("a", { href: "#", onclick: onTabChange(tabSpec.tab) }, tabSpec.label)
      ]);
    }

    function tabContent(tabSpec: TabSpec): VDom {
      return m(".tab-pane", { class: activeClass(tabSpec.tab) }, tabSpec.content);
    }

    const circulationClass = classnames({ active: model.tab === "circulation" });
    const membersClass = classnames({ active: model.tab === "members" });

    function onTabChange(tab: string) {
      return function(evt: Event): void {
        evt.preventDefault();
        propose({ type: "Root.LocationChange", url: "/" + tab });
      }
    }

    const tabSpecs: Array<TabSpec> = [
      { tab: "circulation", label: "Circulation", content: views.circulation(model.circulation) },
      { tab: "members", label: "Members", content: m("span", "Members") },
      { tab: "orders", label: "Orders", content: m("span", "Orders") },
      { tab: "repairs", label: "Repairs", content: m("span", "Repairs") },
      { tab: "books", label: "All Books", content: m("span", "") },
      { tab: "other", label: "Something Else", content: m("span", "Coming soon") }
    ];

    return m("div", [
      m("ul.nav.nav-tabs", tabSpecs.map(tabHeader)),
      m(".tab-content", tabSpecs.map(tabContent)),
      views.progressDialog(model)
    ]);
  }

  return view;
}
