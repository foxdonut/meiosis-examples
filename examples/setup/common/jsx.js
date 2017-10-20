export const jsx = function(propMap, defaultProps) {
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
      if (defaultProps) {
        args[1] = Object.assign(defaultProps, props);
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

export const jsxIvi = jsx({}, {
  key: null,
  events: null,
  props: null,
  className: null,
  style: null,
  unsafeHTML: null,
  value: null,
  checked: null
});

export const jsxMithril = jsx({
  "onChange": "oninput",
  "onClick": "onclick"
});

export const jsxPetitDom = jsxMithril;

export const jsxPicodom = jsxMithril;

export const jsxPreact = jsxDio;
