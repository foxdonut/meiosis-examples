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
      const rest = [];
      for (var i = 2; i < arguments.length; i++) {
        rest.push(arguments[i])
      }
      args.push(rest);
      return h.apply(null, args);
    };
  };
};

export const jsxDio = jsx({
});

export const jsxDomvm = jsx({
  "className": "class",
  "htmlFor": "for",
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const jsxInferno = jsx({
  "htmlFor": "for"
});

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
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const jsxPetitDom = jsxMithril;

export const jsxPicodom = jsxMithril;

export const jsxPreact = jsxDio;

export const jsxSnabbdom = jsx({
  "onChange": "on-change",
  "onClick": "on-click",
  "onInput": "on-input"
});
