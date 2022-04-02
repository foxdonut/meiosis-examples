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
      'div.ba.b--orange.pa2.mt2',
      cell.nested.one.view(cell, newGifGenerated),
      cell.nested.two.view(cell, newGifGenerated)
    )
};
