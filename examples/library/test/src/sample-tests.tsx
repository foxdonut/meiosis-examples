import test from "ava";
import { ReactElement } from "react";
import * as React from "react";
const $ = require("jquery");

import { renderer } from "meiosis-react";
import { createComponent, run } from "meiosis";
import { CreateComponent, Component, Emitter, Renderer, RenderRoot } from "meiosis";

interface Model {
  counter: number;
  description: string;
}

type View = ReactElement<any>;

interface Proposal {
  increment: number;
}

test("implements a render function for React", t => {
  const id = "app";
  document.write("<div id='" + id + "'></div>");
  const render: Renderer<Model, View> = renderer().intoId(document, id);

  let propose: Emitter<Proposal> = null;

  const INCREASE: Proposal = { increment: 1 };

  const Main: Component<Model, View> = createComponent({
    initialModel: { counter: 1, description: "test" },
    view: (model: Model, propose_: Emitter<Proposal>) => {
      propose = propose_;
      return (<span>{model.description + " " + model.counter}</span>);
    },
    receive: (model: Model, proposal: Proposal) => {
        if (proposal.increment) {
          model.counter = model.counter + proposal.increment;
          return model;
        }
        return model;
      }
    }
  );

  run(render, Main);

  const $el: JQuery = $("#" + id);
  t.is($el.find("span").text(), "test 1");

  propose(INCREASE);
  t.is($el.find("span").text(), "test 2");
});
