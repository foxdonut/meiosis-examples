/*global requirejs*/
requirejs.config({
  paths: {
    meiosis: "/public/lib/meiosis.min",
    meiosisVanillaJs: "/public/lib/meiosis-vanillajs.min",
    meiosisTracer: "/public/lib/meiosis-tracer.min"
  }
});

requirejs(["require", "meiosis", "meiosisVanillaJs", "meiosisTracer",
    "./model", "./view", "./ready", "./receive"
  ],
  function(require) {
    var meiosis = require("meiosis");
    var meiosisVanillaJs = require("meiosisVanillaJs");
    var meiosisTracer = require("meiosisTracer");

    var model = require("./model");
    var view = require("./view");
    var ready = require("./ready");
    var receive = require("./receive");

    var renderer = meiosisVanillaJs.renderer;
    var Meiosis = meiosis.init(renderer.intoId("app"));

    var createComponent = Meiosis.createComponent;

    var Main = createComponent({
      initialModel: model.initialModel,
      view: view,
      ready: ready,
      receive: receive
    });

    var renderRoot = Meiosis.run(Main);

    meiosisTracer(createComponent, renderRoot, "#tracer");
  }
);
