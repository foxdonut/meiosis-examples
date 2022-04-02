import { identity } from 'ramda';
import { fold } from 'static-sum-type';
import yslashn from 'static-sum-type/modules/yslashn';
import m from 'mithril';
import { buttonStyle } from '../util/ui';

export const Loaded = yslashn.maybe('Loaded');
export const Success = yslashn.maybe('Success');
export const Image = yslashn.maybe('Image');

const IMG_PREFIX = '/examples/random-gif/images/';
const gif_new_url = 'https://api.giphy.com/v1/gifs/random';
const api_key = 'HMUbJEROIPi2Dodeq0thL28emz5CMCRX';
// const api_key = "dc6zaTOxFJmzC"

const actions = {
  editTag: (cell, tag) => cell.update({ tag }),

  newGif: (cell, newGifGenerated) => {
    cell.update({ image: Loaded.N() });

    m.request({ url: gif_new_url, params: { api_key, tag: cell.state.tag } })
      .then((response) => {
        cell.update({ image: Loaded.Y(Success.Y(Image.Y(response.data.images.original.url))) });
        if (newGifGenerated) {
          newGifGenerated();
        }
      })
      .catch(() => cell.update({ image: Loaded.Y(Success.N()) }));
  },

  reset: (cell) => cell.update({ image: Loaded.Y(Success.Y(Image.N())) })
};

const imgsrc = (image) =>
  fold(Loaded)({
    N: () => IMG_PREFIX + 'loading.gif',
    Y: fold(Success)({
      N: () => IMG_PREFIX + 'error.png',
      Y: fold(Image)({
        N: () => IMG_PREFIX + 'blank.png',
        Y: identity
      })
    })
  })(image);

export const randomGif = {
  initial: {
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ''
  },
  actions,
  view: (cell, newGifGenerated) =>
    m(
      'div.ba.b--green.pa2.mt2',
      m('span.mr2', 'Tag:'),
      m('input[type=text]', {
        value: cell.state.tag,
        onkeyup: (evt) => actions.editTag(cell, evt.target.value)
      }),
      m(
        'button.bg-blue' + buttonStyle,
        { onclick: () => actions.newGif(cell, newGifGenerated) },
        'Random Gif'
      ),
      m('button.bg-red' + buttonStyle, { onclick: () => actions.reset(cell) }, 'Reset'),
      m('div.mt2', m('img', { width: 200, height: 200, src: imgsrc(cell.state.image) }))
    )
};
