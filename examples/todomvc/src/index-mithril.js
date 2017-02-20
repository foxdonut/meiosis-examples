import m from "mithril";
import { startApp } from "./app";
import { view } from "./app/view-mithril";

startApp(view, m.render);
