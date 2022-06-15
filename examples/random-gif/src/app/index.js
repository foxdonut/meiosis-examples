// @ts-check
import m from 'mithril';

import { button } from '../button';
import { counter } from '../counter';
import { randomGif } from '../random-gif';
import { randomGifPair } from '../random-gif-pair';
import { randomGifPairPair } from '../random-gif-pair-pair';
import { randomGifList } from '../random-gif-list';

const actions = {
  newGifGenerated: (cell) => {
    const increment = cell.state.counter.value > 3 && cell.state.button.active ? 2 : 1;
    cell.update({ counter: { value: (x) => x + increment } });
  }
};

export const app = {
  nested: {
    button,
    counter,
    randomGif1: randomGif,
    randomGif2: randomGif,
    randomGifPair,
    randomGifPairPair,
    randomGifList
  },
  view: (cell) => {
    const newGifGenerated = () => actions.newGifGenerated(cell);

    return m('div',
      cell.nested.counter.view(cell),

      m('div.mt-2', 'Button:'),
      cell.nested.button.view(cell),

      m('div.mt-2', 'Random Gif:'),
      cell.nested.randomGif1.view(cell, newGifGenerated),

      m('div.mt-2', 'Another Random Gif:'),
      cell.nested.randomGif2.view(cell, newGifGenerated),

      m('div.mt-2', 'Random Gif Pair:'),
      cell.nested.randomGifPair.view(cell, newGifGenerated),

      m('div.mt-2', 'Random Gif Pair Pair:'),
      cell.nested.randomGifPairPair.view(cell, newGifGenerated),

      m('div.mt-2', 'Random Gif List:'),
      cell.nested.randomGifList.view(cell, newGifGenerated)
    );
  }
};
