// Credit: http://www.tomharding.me/2016/11/12/curry-on-wayward-son/
export const uncurry = function(fn) {
  if (typeof fn !== "function") {
    return fn;
  }

  return function() {
    const xs = Array.from(arguments);
    // My edit: allow to call fn()
    if (xs.length === 0) {
      xs.push(undefined);
    }
    return uncurry(xs.reduce((f, x) => f(x), fn));
  };
};
