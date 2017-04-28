import { createView } from "./view";
import { footer } from "../footer";
import { header } from "../header";

export const layout = {
  create: (models, update, component) => {
    const components = {
      Footer: footer.create(update),
      Header: header.create(update),
      Component: component.create(update)
    };

    return createView(models, components);
  }
};
