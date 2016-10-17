import { initialModel } from "./model";
import { view } from "./view";
import { ComponentConfig, Propose } from "./types";

function rootConfig(): ComponentConfig<Propose> {
  return {
    initialModel,
    view
  };
}

export { rootConfig };
