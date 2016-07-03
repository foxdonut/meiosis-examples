/*global define, exports, module, require*/

// This boilerplate is to support running this code with either, just the browser, or RequireJS,
// or node.js / npm (browserify, webpack, etc.) Do not think this boilerplate is necessary to run
// Meiosis. It is for convenience to be able to run the example with your preferred module system.
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./actions", "variant/todoEdit/view", "./display", "./receive", "./postRender", "variant/todoEdit/ready", "../todoItem/state"], function(todoEditActions, todoEditView, todoEditDisplay, todoEditReceive, todoEditPostRender, todoEditReady, todoItemState) {
      return (root.todoEditComponent = factory(todoEditActions, todoEditView, todoEditDisplay, todoEditReceive, todoEditPostRender, todoEditReady, todoItemState));
    });
  }
  else if (typeof module === "object" && module.exports) {
    module.exports = (root.todoEditComponent = factory(require("./actions"), require("variant/todoEdit/view"), require("./display"), require("./receive"), require("./postRender"), require("variant/todoEdit/ready"), require("../todoItem/state")));
  }
  else {
    root.todoEditComponent = factory(root.todoEditActions, root.todoEditView, root.todoEditDisplay, root.todoEditReceive, root.todoEditPostRender, root.todoEditReady, root.todoItemState);
  }
}(this || window, // ^^ the code above is boilerplate. the "real" code starts below. vv

  function(todoEditActions, todoEditView, todoEditDisplay, todoEditReceive, todoEditPostRender, todoEditReady, todoItemState) {
    return function(createComponent, todoStorage) {
      return createComponent({
        actions: todoEditActions,
        view: todoEditDisplay(todoItemState, todoEditView),
        receive: todoEditReceive(todoStorage),
        postRender: todoEditPostRender, // only jquery and vanillajs need postRender
        ready: todoEditReady // only jquery and vanillajs need ready
      });
    };
  }
));
