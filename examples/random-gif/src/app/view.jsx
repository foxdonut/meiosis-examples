import React from "react";

export function view(components) {
  return function(model) {
    return (<div>
      <div>Counter:</div>
      {components.counter(model)}
      <div>Button:</div>
      {components.button(model)}
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
    </div>);
  };
}
