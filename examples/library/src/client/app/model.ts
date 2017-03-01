import { Mapper } from "meiosis";
import { Model } from "./types";

export const initialModel: Model = {
  circulation: {
    bookIds: [],
    booksById: {}
  },
  inProgress: false,
  route: "", //FIXME: should be initial route
  tab: "circulation",
};
