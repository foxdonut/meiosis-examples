import { Model, State } from "../util";
import { state } from "./state";
import { createView } from "./view-mithril";
import { header } from "../header/index-mithril";
//import { main } from "../main/index-mithril";
//import { footer } from "../footer/index-mithril";

export const app = {
  create: (update: Function, events: any) => {
    return createView({
      header: header.create(update, events)/*,
      main: main.create(update, events),
      footer: footer.create(update, events)*/
    });
  },
  state
};
