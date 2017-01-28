import { run } from "meiosis";
import Type from "union-type";
import createServer from "./sinonServer";

export function createApp() {
  Type.check = false;

  createServer();

  const initialModel = {
    form: {
      todo: {
        id: "",
        priority: "",
        description: ""
      },
      validationErrors: { }
    },
    list: {
      todos: [],
      message: ""
    }
  };
  const receive = (model, proposal) => model;

  return run({ initialModel, scanner: receive });
}
