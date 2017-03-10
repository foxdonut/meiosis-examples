import m from "mithril";
import { counter } from "../counter";
import { counterView } from "../counter/view.jsx";
import { buttonView } from "../button/view.jsx";
import { randomGifView } from "../random-gif/view.jsx";
import { randomGifPairView } from "../random-gif-pair/view.jsx";
import { randomGifPairPairView } from "../random-gif-pair-pair/view.jsx";
import { randomGifListView } from "../random-gif-list/view.jsx";

export const view = (model, actions) => (
  <div>
    <ul className="nav nav-pills">
      <li role="presentation">
        <a className="btn btn-xs btn-default" href="index-m.html">Mithril + m version</a>
      </li>
      <li role="presentation" className="active">
        <a className="btn btn-xs btn-default" href="index-jsx.html">Mithril + JSX version</a>
      </li>
    </ul>
    { counterView(model.counter, actions.counter) }
    <div>Button:</div>
    { buttonView(model.button, actions.button) }
    <div>Random Gif:</div>
    { randomGifView(model.randomGif1, actions.randomGif1,
        { newGifSuccess: counter.actions.newGifSuccess(model, actions.counter) })
    }
    <div>Another Random Gif:</div>
    { randomGifView(model.randomGif2, actions.randomGif2) }
    <div>Random Gif Pair:</div>
    { randomGifPairView(model.randomGifPair, actions.randomGifPair) }
    <div>Random Gif Pair Pair:</div>
    { randomGifPairPairView(model.randomGifPairPair, actions.randomGifPairPair) }
    <div>Random Gif List:</div>
    { randomGifListView(model.randomGifList, actions.randomGifList) }
  </div>
);
