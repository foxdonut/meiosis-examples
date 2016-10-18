import * as React from "react";
import { Component } from "meiosis";
import { EventHandler, SyntheticEvent } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";

import { BookListModel, Model, Propose, VDom, View } from "./types";

function createView(circulationComponent: Component<BookListModel, VDom>): View<Propose> {
  const view: View<Propose> = (model: Model, propose: Propose): VDom => {
    function onTabsChange(tab: string) {
      propose({ type: "Root.UrlChange", url: "/" + tab });
    }

    const goToRepairs: EventHandler<SyntheticEvent> = (evt: SyntheticEvent): void => {
      evt.preventDefault();
      propose({ type: "Root.UrlChange", url: "/repairs" });
    }

    return (
      <MuiThemeProvider>
        <Tabs value={model.tab} onChange={onTabsChange}>
          <Tab value="circulation" label="Circulation">
            <div>Circulation</div>
            {circulationComponent(model.circulation)}
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
            {/* instead of href, use onclick, and propose with url change that does a push on the history */}
            <div><a href="#" onClick={goToRepairs}>Repairs</a></div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }

  return view;
}

export { createView };
