import React from "react";

export function view(components) {
  return function(state) {
    return (<div>
      <div>Counter:</div>
      {components.counter(state.counter)}
      <div>Button:</div>
      {components.button(state.button)}
      <div>Random Gif:</div>
      {components.randomGif1(state.randomGif1)}
      <div>Another Random Gif:</div>
      {components.randomGif2(state.randomGif2)}
      <div>Random Gif Pair:</div>
      {components.randomGifPair(state.randomGifPair)}
      <div>Random Gif Pair Pair:</div>
      {components.randomGifPairPair(state.randomGifPairPair)}
      <div>Random Gif List:</div>
      {components.randomGifList(state.randomGifList)}
    </div>);
  };
}
