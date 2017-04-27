import { createView } from "./view";
import { footer } from "../footer";
import { header } from "../header";
import { main } from "../main";

export const app = {
  model: () => {

  },

  create: update => {
    const components = {
      footer: footer.create(update),
      header: header.create(update),
      main: main.create(update)
    };
    return createView(update, components);
  }
};
