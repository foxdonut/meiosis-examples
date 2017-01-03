import { run } from "meiosis";

export function startApp() {
  const receive = (model, proposal) => {
    return model;
  };

  const initial = {
  };

  return run({ initial, scanner: { model: receive } });
}
