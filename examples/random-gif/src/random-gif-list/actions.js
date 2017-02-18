import stream from "mithril/stream";

export const actions = {
  add: stream(),
  remove: stream()
};

export const intents = {
  add: () => actions.add(true),
  remove: id => () => actions.remove(id)
};
