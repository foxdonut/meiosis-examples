<script src="https://flems.io/flems.html" type="text/javascript" charset="utf-8"></script>

# 01 - Hello World

This is a test lesson.

```js
var duck = function() {
  return "quack";
};
```


<div id="flems1"></div>

<script>
  window.Flems(flems1, {
    files: [{name: "01-hello-world.js", content: "/*global m*/\nvar element = document.getElementById(\"app\");\nm.render(element, m(\"div\", \"Hello, world\"));\n"},{name: "app.html", content: "<div id=\"app\"></div>\n"}],
    links: [{name: "mithril", type: "js", url: "https://unpkg.com/mithril"}]
  })
</script>
    

This concludes the test.
