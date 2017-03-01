import { Stream } from "meiosis";
import { streamLibrary } from "../util";

export const actions = {
  ordersTab: streamLibrary.stream<boolean>()
};
