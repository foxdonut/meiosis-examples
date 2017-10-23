export const jsx = function(propMap) {
  return function(h) {
    return function(type, props) {
      const args = [type, props];
      if (props) {
        Object.keys(propMap).forEach(fromProp => {
          if (props[fromProp]) {
            const toProp = propMap[fromProp];
            props[toProp] = props[fromProp];
            delete props[fromProp];
          }
        });
      }
      const rest = [];
      for (var i = 2; i < arguments.length; i++) {
        rest.push(arguments[i])
      }
      args.push(rest);
      return h.apply(null, args);
    };
  };
};
