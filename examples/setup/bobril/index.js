import * as b from "bobril";
import { setup } from "../common";

// Source: https://github.com/Bobris/Bobril/blob/master/examples/jsx/app.jsx
function jsxBobrilAdapter(name, props) {
  var children = [];
  for(var i=2;i<arguments.length;i++) {
      var ii=arguments[i];
    if (typeof ii==="number")
      children.push(""+ii);
    else
      children.push(ii);
    }
  if (typeof name==="string") {
    var res = { tag: name, children: children };
    if (props == null) {
      return res;
    }
    var attrs = {};
    var someattrs = false;
    for(var n in props) {
      if (!props.hasOwnProperty(n)) continue;
      if (n==="key" || n==="className" || n==="style" || n==="component" || n==="data") {
        res[n]=props[n];
        continue;
      }
      someattrs=true;
      attrs[n]=props[n];
    }
    if (someattrs)
      res.attrs=attrs;

    return res;
  } else {
    if (props == null) {
      return { component: name, children: children };
    }
    return { component: name, key:props.key, data: props };
  }
}

window.jsx = jsxBobrilAdapter;

const { models, view, element } = setup(() => null);

const View = b.createComponent({
  render: (ctx, me) => b.assign(me, view(models()))
});
b.init(View, element);

models.map(() => b.invalidate());
