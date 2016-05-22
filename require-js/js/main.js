/*global requirejs*/
requirejs.config({
  paths: {
    meiosis: "../lib/meiosis.min",
    meiosisVanillaJs: "../lib/meiosis-vanillajs.min"
  }
});

requirejs(["require", "meiosis", "meiosisVanillaJs", "./model", "./view", "./ready", "./receiveUpdate"],
  function(require) {
    var meiosis = require("meiosis");
    var meiosisVanillaJs = require("meiosisVanillaJs");

    var model = require("./model");
    var view = require("./view");
    var ready = require("./ready");
    var receiveUpdate = require("./receiveUpdate");

    var renderer = meiosisVanillaJs.renderer;
    var Meiosis = meiosis.init(renderer.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var Main = createComponent({
      initialModel: model.initialModel,
      view: view,
      ready: ready,
      receiveUpdate: receiveUpdate
    });

    Meiosis.run(Main);
  }
);
