import meiosis from "meiosis";
import snabbdom from "snabbdom";
import { renderAdapterIdConfig } from "meiosis-snabbdom";
import createMain from "./labeledSliders";

const Meiosis = meiosis(renderAdapterIdConfig(snabbdom, "app"));

createMain(Meiosis);
