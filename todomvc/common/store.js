(function(ref) {
  var STORAGE_KEY = "meiosis-todomvc";

  ref.todoStorage = {
    load: function () {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ||
        "[{\"id\":1,\"title\":\"meiosis\",\"completed\":false}]");
    },
    save: function (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  };
})(window);
