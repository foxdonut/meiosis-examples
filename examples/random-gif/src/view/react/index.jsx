import React from "react";
import { counterView } from "./counter.jsx";
import { buttonView } from "./button.jsx";
import { randomGifView } from "./random-gif.jsx";
import { randomGifPairView } from "./random-gif-pair.jsx";
import { randomGifPairPairView } from "./random-gif-pair-pair.jsx";
import { randomGifListView } from "./random-gif-list.jsx";

export const view = model => (
  <div>
    <div>React</div>
    { counterView(model.counter) }
    <div>Button:</div>
    { buttonView(model.button) }
    <div>Random Gif:</div>
    { randomGifView(model.randomGif1) }
    <div>Another Random Gif:</div>
    { randomGifView(model.randomGif2) }
    <div>Random Gif Pair:</div>
    { randomGifPairView(model.randomGifPair) }
    <div>Random Gif Pair Pair:</div>
    { randomGifPairPairView(model.randomGifPairPair) }
    <div>Random Gif List:</div>
    { randomGifListView(model.randomGifList) }
  </div>
);
