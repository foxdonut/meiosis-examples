import * as m from "mithril";

import { startApp } from "./index";
import { view } from "./app/view-mithril";

startApp(view, m.render);
