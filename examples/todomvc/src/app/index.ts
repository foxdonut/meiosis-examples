import { UpdateFunction, ViewFunction } from "meiosis";
// import { footer } from "../footer";
import { header } from "../header";
import { main } from "../main";
import { storage } from "../storage";
import { Model } from "../util";
import { state } from "./state";
import { createView } from "./view";

export const app = {
  create: (update: UpdateFunction, events: any): ViewFunction => {
    storage.create(update, events.storage);

    const components = {
      // footer: footer.create(update, events),
      header: header.create(update, events.header),
      main: main.create(update, events.main)
    };
    return createView(components);
  },
  state,
  events: {
    storage: storage.events,
    // footer: footer.events,
    header: header.events,
    main: main.events
  }
};
