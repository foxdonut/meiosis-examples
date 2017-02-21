import { Scanner, StreamLibraryCombine, Stream, createMergeIntoOne, createScan } from "meiosis";

const flyd = require("flyd");

export const streamLibrary: StreamLibraryCombine = flyd;
export const mergeIntoOne: ((streams: Array<Stream<any>>) => Stream<any>) = createMergeIntoOne(flyd);
export const scan: (<A, B>(fn: Scanner<A, B>, acc: A, s: Stream<B>) => Stream<A>) = createScan(flyd);
