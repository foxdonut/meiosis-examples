import React from "react";
import { view as counter } from "./counter.jsx";
import { view as button } from "./button.jsx";
import { view as randomGif } from "./random-gif.jsx";
import { view as randomGifPair } from "./random-gif-pair.jsx";
import { view as randomGifPairPair } from "./random-gif-pair-pair.jsx";
import { view as randomGifList } from "./random-gif-list.jsx";

export const view = model => (
  <div>
    <div>React</div>
    {counter(model.counter)}
    <div>Button:</div>
    {button(model.button)}
    <div>Random Gif:</div>
    {randomGif(model.randomGif1, "randomGif1")}
    <div>Another Random Gif:</div>
    {randomGif(model.randomGif2, "randomGif2")}
    <div>Random Gif Pair:</div>
    {randomGifPair(model.randomGifPair, "randomGifPair")}
    <div>Random Gif Pair Pair:</div>
    {randomGifPairPair(model.randomGifPairPair)}
    <div>Random Gif List:</div>
    {randomGifList(model.randomGifList)}
  </div>
);
