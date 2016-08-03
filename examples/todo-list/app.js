import Type from "union-type";
import createServer from "./sinonServer";

export default function(runapp) {
  Type.check = false;

  createServer();
  runapp();
}
