import { Mapper, Stream } from "meiosis";

import { Book } from "../../persistence";
import { Model } from "../app/types";

import * as actions from "./actions";
import * as model from "./model";

export const circulation = {
  ...model,
  ...actions
};
