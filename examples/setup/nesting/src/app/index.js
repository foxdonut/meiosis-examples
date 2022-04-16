import { view } from './view';
import { conditions } from '../conditions';
import { temperature } from '../temperature';

export const app = {
  initial: {
    conditions: conditions.initial,
    temperature: {
      air: temperature.initial,
      water: temperature.initial
    }
  },
  view
};
