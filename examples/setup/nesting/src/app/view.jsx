import { h } from 'preact';

import { conditions } from '../conditions';
import { temperature } from '../temperature';

export const view = (cell) => (
  <div>
    {conditions.view(cell.nest('conditions'))}
    {temperature.view(cell.nest('temperature').nest('air'))}
    {temperature.view(cell.nest('temperature').nest('water'))}
  </div>
);
