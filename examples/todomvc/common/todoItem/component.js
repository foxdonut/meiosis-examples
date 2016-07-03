/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./actions", "./state", "./display", "variant/todoItem/view", "./receive", "variant/todoItem/ready", "../todoEdit/component"], function(todoItemActions, todoItemState, todoItemDisplay, todoItemView, todoItemReceive, todoItemReady, todoEditComponent) {
      return (root.todoItemComponent = factory(todoItemActions, todoItemState, todoItemDisplay, todoItemView, todoItemReceive, todoItemReady, todoEditComponent));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.todoItemComponent = factory(require("./actions"), require("./state"), require("./display"), require("variant/todoItem/view"), require("./receive"), require("variant/todoItem/ready"), require("../todoEdit/component")));
  }
  else {
    root.todoItemComponent = factory(root.todoItemActions, root.todoItemState, root.todoItemDisplay, root.todoItemView, root.todoItemReceive, root.todoItemReady, root.todoEditComponent);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(todoItemActions, todoItemState, todoItemDisplay, todoItemView, todoItemReceive, todoItemReady, todoEditComponent) {
    return function(createComponent, todoStorage) {
      var todoEdit = todoEditComponent(createComponent, todoStorage);

      return createComponent({
        actions: todoItemActions,
        view: todoItemDisplay(todoItemState, todoItemView(todoEdit)),
        receive: todoItemReceive(todoStorage),
        ready: todoItemReady // only jquery and vanillajs need ready
      });
    };
  }
));
