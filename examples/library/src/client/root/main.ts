import { initialModel } from "./model";
import { view } from "./view";
import { ComponentConfig } from "./types";

function rootConfig(): ComponentConfig {
  return {
    initialModel,
    view
  };
}

export { rootConfig };
