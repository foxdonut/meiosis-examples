# Meiosis Tutorial

[Table of Contents](toc.html)

## 13 - Object Function Update

In the previous lesson, [12 - Function Update](12-func-update-mithril.html), we looked at a more
flexible way of issuing updates, namely by passing functions to `update()`.

The majority of the Meiosis examples use this strategy. However, there is a slightly different
way that is even more flexible. We'll look at it here.

### Putting the function into an object

Whereas before, we were passing functions to `update()`:

```js
update(func);
```

Now, we'll put the function in an object. The property to which we associate the function is
**entirely up to you** - here, I'll use `fn`:

```js
update({ fn: func });
```

The only change we need to our Meiosis pattern setup code is to use the `fn` property to get
the function that performs the update to the model:

```js
var models = m.stream.scan(function(model, modelUpdate) {
  return modelUpdate.fn(model);
}, app.model(), update);
```

### Nesting updates

To adjust nesting to these new updates, we just need to get the function from the `fn` property.
Then, we nest the function as we did before, and put it back on the `fn` property of the nested
update. We'll use `Object.assign` so that we preserve whatever other properties might be on the
issued update:

```js
var nestUpdate = function(update, prop) {
  return function(modelUpdate) {
    var fn = modelUpdate.fn;

    update(Object.assign(modelUpdate, {
      fn: function(model) {
        model[prop] = fn(model[prop]);
        return model;
      }
    }));
  };
};
```

The rest of the nesting code does not need to change.

### Issuing updates

To issue updates, we just need to pass an object with an `fn` property. So, whereas before we
had:

```js
update(function(model) {
  model.value += amount;
  return model;
});
```

Now, we'll use:

```js
update({ fn: function(model) {
  model.value += amount;
  return model;
} });
```

### Flexibility

Issuing updates as objects gives us more flexibility. We can associate other data or metadata
to updates, for parent components to use.

For example:

- We can simplify **dynamic** lists of components, where we add and remove components at runtime,
by adding a component `id` to updates. A parent component can use this to identify _which_
component in the list issued the update.
- We can create functionality like [React Context](https://reactjs.org/docs/context.html) simply
by having a `context` property in our model. Then, we can adjust nesting so that `context` always
remains at the top level. This makes it easy to pass context information (current user, role,
theme, and so on) down component trees. We could update the context by associating the function
to `ctx` instead of `fn`, and use it accordingly in the Meiosis setup code.

Keep that in mind if you are creating a larger project with Meiosis. You may find that object
updates will be helpful down the line for dealing with complex scenarios.

@flems mithril/13-obj-func-update.js,app.html,app.css mithril,mithril-stream 800

This concludes the Meiosis tutorial. Thanks for reading, I hope you enjoy Meiosis!

[Table of Contents](toc.html)

[Meiosis home page](http://meiosis.js.org)
