export const wrap = function(fn) {
  const args = Array.from(arguments).slice(1);

  return function(_evt) {
    if (fn) {
      fn.apply(null, args);
    }
  };
};
