/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../../common/todoItem/actions", "../../common/todoItem/state", "../../common/todoItem/display", "./view", "../../common/todoItem/receive", "../todoEdit/component"], function(todoItemActions, todoItemState, todoItemDisplay, todoItemView, todoItemReceive, todoEditComponent) {
      return (root.todoItemComponent = factory(todoItemActions, todoItemState, todoItemDisplay, todoItemView, todoItemReceive, todoEditComponent));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.todoItemComponent = factory(require("../../common/todoItem/actions"), require("../../common/todoItem/state"), require("../../common/todoItem/display"), require("./view"), require("../../common/todoItem/receive"), require("../todoEdit/component")));
  }
  else {
    root.todoItemComponent = factory(root.todoItemActions, root.todoItemState, root.todoItemDisplay, root.todoItemView, root.todoItemReceive, root.todoEditComponent);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(todoItemActions, todoItemState, todoItemDisplay, todoItemView, todoItemReceive, todoEditComponent) {
    return function(createComponent, todoStorage) {
      var todoEdit = todoEditComponent(createComponent, todoStorage);

      return createComponent({
        actions: todoItemActions,
        view: todoItemDisplay(todoItemState, todoItemView(todoEdit)),
        receive: todoItemReceive(todoStorage)
      });
    };
  }
));