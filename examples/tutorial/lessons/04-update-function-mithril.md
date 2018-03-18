# Meiosis Tutorial

[Table of Contents](toc.html)

## 04 - Update Function

In the previous lesson, [03 - Update Model](03-update-model-mithril.html), we added a button
to the view and associated a function to `onclick`. That function made a change to the model
and re-rendered the view with the updated model.

```js
var increase = function(_event) {
  model = model + 1;
  m.render(element, view(model));
};
```

### Extracting out the details

Notice that the function above needs to "know" about the details of how to re-render the view:

- It calls `m.render`
- It references the `element`
- It references the `model`
- It references the `view` function.

That's a lot of details tied into that function!

Let's extract those details out into an `update` function:

```js
var update = function(value) {
  model = model + value;
  m.render(element, view(model));
};
```

Now the `increase` function just needs to call `update(1)` to increase the value by 1 and re-render the view.

### Event handler function

Our `increase` function can now be:

```js
var increase = function(_event) {
  update(1);
};
```

And a `decrease` function could be:

```js
var decrease = function(_event) {
  update(-1);
};
```

But instead of having separate functions for what are just different values that we pass to
`update`, we can write a single function that gets the **amount** by which to increase, and
**returns a function** that calls `update` with that amount:

```js
var increase = function(amount) {
  return function(_event) {
    update(amount);
  };
};
```

As you can see, **functions are values** and, like other values, they can be **returned** as a
result of calling a function. They can also be passed as values to other functions.

So what does this buy us? We can call `increase(1)` and `increase(-1)` to associate event handlers
to the `increase` and `decrease` buttons:

```js
m("button", { onclick: increase( 1) }, "+1"),
m("button", { onclick: increase(-1) }, "-1")
```

Remember that `onclick` needs a `function(event)`, and that is what we are getting by calling
`increase(1)` and `increase(-1)`.

![Event Handler Function](04-update-function-01.svg)

### Putting it all together

@flems mithril/04-update-function.js,app.html mithril 800

In the code above, notice that we now have a `createView` function that receives `update` as a
parameter. This is the `update` function that we call to change the model and re-render the view,
such as `update(1)`. By receiving `update` as a parameter, our `createView` function is not tied
to anything outside of the function itself. It does not reference `update` as a global variable.

Also notice that `createView` is another function-that-returns-a-function. After setting up the
`increase` event handler, it creates and returns the `view` function, which continues to be a
function that takes a `model` and returns a view.

### Exercises

1. Add two buttons, which increase and decrease the counter by 5. You should only have to add
two lines of code to do this.
1. Change the initial value of the model to `1`. Then, change how the model gets updated, by
**multiplying** instead of adding the incoming value. Verify that `+1` has no effect, `-1`
only changes the sign, and `+5` and`-5` multiply by `5` and `-5` respectively.

When you are ready, continue on to [05 - Stream](05-stream-mithril.html).
