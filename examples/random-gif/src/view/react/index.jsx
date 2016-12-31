import React from "react";
import { view as counter } from "./counter.jsx";
import { view as button } from "./button.jsx";

export const view = model => (
  <div>
    <div>React</div>
    {counter(model.counter)}
    <div>Button:</div>
    {button(model.button)}
      {/*
      <div>Random Gif:</div>
      {components.randomGif1(model)}
      <div>Another Random Gif:</div>
      {components.randomGif2(model)}
      <div>Random Gif Pair:</div>
      {components.randomGifPair(model)}
      <div>Random Gif Pair Pair:</div>
      {components.randomGifPairPair(model)}
      <div>Random Gif List:</div>
      {components.randomGifList(model)}
      */}
  </div>
);
