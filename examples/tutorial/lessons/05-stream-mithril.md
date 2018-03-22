# Meiosis Tutorial

[Table of Contents](toc.html)

## 05 - Stream

In the previous lesson, [04 - Update Function](04-update-function-mithril.html), we used
**functions that return functions** to extract the `update` logic out of the view, and also to
create an event handler function that accepts a parameter.

Our setup code was as follows:

```js
var model = 0;

var element = document.getElementById("app");

var view = null;

var update = function(value) {
  model = model + value;
  m.render(element, view(model));
};

view = createView(update);

m.render(element, view(model));
```

@flems mithril/05-stream.js,app.html mithril 800

[06 - Scan](06-scan-mithril.html)
