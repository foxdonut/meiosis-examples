import { Stream } from "meiosis";
import { streamLibrary } from "../util";

export const actions = {
  tabChange: streamLibrary.stream()
}

export const intents = {
  tabChange: (tab: string) => window.location.hash = "/" + tab
};
