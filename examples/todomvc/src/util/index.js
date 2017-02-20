import flyd from "flyd";
import { createScan, createMergeIntoOne } from "meiosis";

export const scan = createScan(flyd);
export const mergeIntoOne = createMergeIntoOne(flyd);
