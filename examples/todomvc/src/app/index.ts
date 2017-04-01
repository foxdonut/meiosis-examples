import { UpdateFunction, ViewFunction } from "meiosis";
import { footer } from "../footer";
import { header } from "../header";
import { main } from "../main";
import { router } from "../router";
import { storage } from "../storage";
import { Model } from "../util";
import { state } from "./state";
import { createView } from "./view";

export const app = {
  create: (update: UpdateFunction, events: any): ViewFunction => {
    storage.create(update, events.storage);

    const components = {
      footer: footer.create(update, events.footer),
      header: header.create(update, events.header),
      main: main.create(update, events.main)
    };

    router.create(update, events.router);

    return createView(components);
  },
  state,
  events: {
    footer: footer.events,
    header: header.events,
    main: main.events,
    router: router.events,
    storage: storage.events
  }
};
