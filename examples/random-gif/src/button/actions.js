import stream from "mithril/stream";

export const actions = {
  toggle: stream()
};

export const intents = {
  toggle: () => actions.toggle(true)
};
