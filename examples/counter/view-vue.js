(function(ref) {
  ref.vueView = function(model) {
    return function(propose) {
      //return Vue.component("counter", {
      return new Vue({
        el: "#vueApp",
        data: model,
        template: "#view-vue",
        methods: {
          onInc: function() {
            propose({ add: 2 });
          },
          onDecr: function() {
            propose({ add: -2 });
          }
        }
      });
    };
  };
})(window);

