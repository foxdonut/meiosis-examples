import { createView } from "./view";
import { footer } from "../footer";
import { header } from "../header";

export const layout = {
  create: update => {
    const components = {
      Footer: footer.create(update),
      Header: header.create(update)
    };

    return createView(components);
  }
};
