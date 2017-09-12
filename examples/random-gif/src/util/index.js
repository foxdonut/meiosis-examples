export const Case = {
  cases: types => types.reduce((acc, next) => { acc[next] = next; return acc; }, {}),
  of: function(type) {
    const data = Array.prototype.slice.call(arguments, 1);
    return { type, data };
  },
  case: (handler, of) => of && of.type && handler[of.type] && handler[of.type].apply(null, of.data),
  is: (type, of) => of && of.type === type,
  data: of => of.data
};
