//mithril import { view } from "./view";
/*react*/ import { view } from "./view.jsx";
import { receive } from "./receive";

export function config(components) {
  return { view: view(components), receive };
}
