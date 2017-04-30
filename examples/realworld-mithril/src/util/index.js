import { apply, compose, lensPath, over, pipe, tail } from "ramda";

export const thru = (...args) => apply(pipe, tail(args))(args[0]);

// export const nest = (update, path) => pipe(thru(path, lensPath, over), update);

export const nest = (update, path) => compose(update, over(lensPath(path)));
