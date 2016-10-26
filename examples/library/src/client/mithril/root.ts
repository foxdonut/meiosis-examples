import * as m from "mithril";
import { Component } from "meiosis";

import { BookListModel, Model, Propose, RootViews } from "../root/types";
import { VDom, View } from "./types";

export function createRootView(views: RootViews<VDom>): View<Model, Propose> {
  const view: View<Model, Propose> = (model: Model, propose: Propose): VDom => {
    function onTabsChange(tab: string) {
      propose({ type: "Root.LocationChange", url: "/" + tab });
    }

    function goToRepairs(evt: Event): void {
      evt.preventDefault();
      propose({ type: "Root.LocationChange", url: "/repairs" });
    }

    return m("div", [
      m("ul.nav.nav-tabs", [
        m("li", [m("a.active", { href: "#circulation", "data-toggle": "tab" }, "Circulation")]),
        m("li", [m("a", { href: "#members", "data-toggle": "tab" }, "Members")])
      ]),
      m(".tab-content", [
        m("#circulation.tab-pane.active", views.circulation(model.circulation)),
        m("#members.tab-pane", "Members")
      ]),
      views.progressDialog(model)
    ]);
    /*
          <Tabs value={model.tab} onChange={onTabsChange}>
            <Tab value="circulation" label="Circulation">
              <div>Circulation</div>
              {views.circulation(model.circulation)}
            </Tab>
            <Tab value="members" label="Members">
              <div>Members</div>
            </Tab>
            <Tab value="orders" label="Orders">
              <div>Orders</div>
            </Tab>
            <Tab value="repairs" label="Repairs">
              <div>Repairs</div>
            </Tab>
            <Tab value="books" label="All Books">
            </Tab>
            <Tab value="other" label="Something Else">
              <div>Coming soon</div>
              <div><a href="#" onClick={goToRepairs}>Repairs</a></div>
            </Tab>
          </Tabs>
          {views.progressDialog(model)}
        </div>
      </MuiThemeProvider>
    );
    */
  }

  return view;
}
