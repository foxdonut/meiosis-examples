// @ts-check
import m from 'mithril';

import { randomGifPair } from '../random-gif-pair';

export const randomGifPairPair = {
  nested: {
    one: randomGifPair,
    two: randomGifPair
  },
  view: (cell, newGifGenerated) =>
    m(
      'div.border.border-dark.p-2',
      m('div', cell.nested.one.view(cell, newGifGenerated)),
      m('div.mt-2', cell.nested.two.view(cell, newGifGenerated))
    )
};
