import { add } from "ramda";
import { modify } from "../util";

export const increment = {
  create: (update, events) => {
    events.newGifSuccess.map(() => update(model => {
      const increment = model.counter.value >= 3 && model.button.active ? 2 : 1;
      return modify(["counter", "value"], add(increment))(model);
    }));
  },
  events: {
    listen: ["newGifSuccess"]
  }
};
