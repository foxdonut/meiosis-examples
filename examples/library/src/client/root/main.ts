import { initialModel } from "./model";
import { view } from "./view";
import { ComponentConfig } from "./types";
import { initRoutes } from "./routes";

function rootConfig(): ComponentConfig {
  return {
    initialModel,
    view,
    ready: initRoutes
  };
}

export { rootConfig };
