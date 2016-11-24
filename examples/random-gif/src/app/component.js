//mithril import { view } from "./view";
/*react*/ import { view } from "./view.jsx";
import { receive } from "./receive";

export function component(components) {
  return { view: view(components), receive };
}
