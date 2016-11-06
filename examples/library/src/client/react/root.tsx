import * as React from "react";
import { Component } from "meiosis";
import { EventHandler, SyntheticEvent } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";

import { BookListModel, Model, Propose, RootViews } from "../root/types";
import { VDom, View } from "./types";

export function createRootView(views: RootViews<VDom>): View<Model, Propose> {
  const view: View<Model, Propose> = (model: Model, propose: Propose): VDom => {
    function onTabsChange(tab: string) {
      propose({ type: "Root.LocationChange", url: "/" + tab });
    }

    const goToRepairs: EventHandler<SyntheticEvent> = (evt: SyntheticEvent): void => {
      evt.preventDefault();
      propose({ type: "Root.LocationChange", url: "/repairs" });
    }

    return (
      <MuiThemeProvider>
        <div>
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
  }

  return view;
}
