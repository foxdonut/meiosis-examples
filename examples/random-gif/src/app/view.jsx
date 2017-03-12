import m from "mithril";
import { counter } from "../counter/index-jsx";
import { button } from "../button/index-jsx";
import { randomGif } from "../random-gif/index-jsx";
/*
import { randomGifPairView } from "../random-gif-pair/view.jsx";
import { randomGifPairPairView } from "../random-gif-pair-pair/view.jsx";
import { randomGifListView } from "../random-gif-list/view.jsx";
*/

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
    { counter.view(model.counter, actions.counter) }
    <div>Button:</div>
    { button.view(model.button, actions.button) }
    <div>Random Gif:</div>
    { randomGif.view(model.randomGif1, actions.randomGif1) }
    <div>Another Random Gif:</div>
    { randomGif.view(model.randomGif2, actions.randomGif2) }
    {/*<div>Random Gif Pair:</div>
    { randomGifPairView(model.randomGifPair, actions.randomGifPair) }
    <div>Random Gif Pair Pair:</div>
    { randomGifPairPairView(model.randomGifPairPair, actions.randomGifPairPair) }
    <div>Random Gif List:</div>
    { randomGifListView(model.randomGifList, actions.randomGifList) } */}
  </div>
);
