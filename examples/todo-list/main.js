import { init } from "meiosis";
import { renderer } from "meiosis-react";
import runapp from "./todoMain.jsx";
import Type from "union-type";

Type.check = false;

const Meiosis = init(renderer.intoId("app"));

runapp(Meiosis);
