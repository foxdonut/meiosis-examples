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
      for (var i = 2; i < arguments.length; i++) {
        args.push(arguments[i])
      }
      return h.apply(null, args);
    };
  };
};

export const jsxDio = jsx({
  "onChange": "onInput"
});

export const jsxInferno = jsxDio;

export const jsxMithril = jsx({
  "onChange": "oninput",
  "onClick": "onclick"
});

export const jsxPetitDom = jsxMithril;

export const jsxPicodom = jsxMithril;

export const jsxPreact = jsxDio;
