// @ts-check
import m from 'mithril';

import { randomGif, RandomGif } from '../random-gif';

export const randomGifPair = {
  nested: {
    first: randomGif,
    second: randomGif
  }
};

export const RandomGifPair = {
  view: ({ attrs: { cell, newGifGenerated } }) =>
    m(
      'div.ba.b--purple.pa2.mt2',
      m('div.dib', m(RandomGif, { cell: cell.nest('first'), newGifGenerated })),
      m('div.dib.ml2', m(RandomGif, { cell: cell.nest('second'), newGifGenerated }))
    )
};
