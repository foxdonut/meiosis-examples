import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";

import { Model, Propose, VDom, View } from "./types";

const view: View = (model: Model, propose: Propose): VDom => {
  function onTabsChange(tab: string) {
    propose({ type: "UrlChange", url: "/" + tab });
  }

  return (
    <MuiThemeProvider>
      <Tabs value={model.tab} onChange={onTabsChange}>
        <Tab value="circulation" label="Circulation">
          <div>Circulation</div>
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
          <div><a href="/examples/library/booklist">List</a></div>
        </Tab>
      </Tabs>
    </MuiThemeProvider>
  );
}

export { view };
