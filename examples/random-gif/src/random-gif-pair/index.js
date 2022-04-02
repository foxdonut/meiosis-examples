// @ts-check
import m from 'mithril';

import { randomGif } from '../random-gif';

export const randomGifPair = {
  nested: {
    first: randomGif,
    second: randomGif
  },
  view: (cell, newGifGenerated) =>
    m(
      'div.ba.b--purple.pa2.mt2',
      m('div.dib', cell.nested.first.view(cell, newGifGenerated)),
      m('div.dib.ml2', cell.nested.second.view(cell, newGifGenerated))
    )
};
