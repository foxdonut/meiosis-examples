import { view } from "./view";
import { receive } from "./receive";

export function config(components) {
  return { view: view(components), receive };
}
