# 01 - Hello World

This is a test lesson.

```js
var duck = function() {
  return "quack";
};
```

<div id="flems1"></div>

<script src="https://flems.io/flems.html" type="text/javascript" charset="utf-8"></script>
<script>
  window.Flems(flems1, {
    files: [{
      name: "app.js",
      content: 'm.render(\n\tdocument.body,\n\tm("h1", "Hello, world")\n);'
    }],
    links: [{
      name: "mithril",
      type: "js",
      url: "https://unpkg.com/mithril"
    }]
  })
</script>

This concludes the test.
