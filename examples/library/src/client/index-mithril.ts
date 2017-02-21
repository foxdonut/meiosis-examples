import * as m from "mithril";

import { startApp } from "./app";
import { view } from "./app/view-mithril";

startApp("mithril", view, m.render);
