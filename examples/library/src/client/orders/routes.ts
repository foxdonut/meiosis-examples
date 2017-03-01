import * as crossroads from "crossroads";

import { actions } from "./actions";

export function addRoutes(): void {
  crossroads.addRoute("/orders", () => actions.ordersTab(true), 1);
}
