import meiosis from "meiosis";
import meiosisReact from "meiosis-react";
import createMain from "./todoMain.jsx";

const Meiosis = meiosis(meiosisReact.intoId("app"));

createMain(Meiosis);
