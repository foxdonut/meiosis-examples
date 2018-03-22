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

Our initial model is `0`. When the view issues an update, such as `update(1)`, we add the value
`1` to the model and re-render the view.

That works, but what's not so great about this setup is that we have a circular dependency:

- To create the `view` function, we need to pass `update` to `createView`.
- To create the `update` function, we need the `view` function so that `update` can re-render
the view.

So `view` needs `update` and `update` needs `view`... We solved this problem by initializing
`view` to `null`. Then we created the `update` function, which uses `view` but we know it won't
get called until we have a chance to create the `view` function. This is okay as a workaround but
it's not a great situation.

### The Reactive Loop

![The Reactive Loop](05-stream-01.svg)

@flems mithril/05-stream.js,app.html mithril 800

[06 - Scan](06-scan-mithril.html)
