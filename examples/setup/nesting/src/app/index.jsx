import { h } from 'preact';
import _ from 'lodash/fp';

import { conditions, Conditions } from '../conditions';
import { dateTime, DateTime } from '../dateTime';
import { temperature, Temperature } from '../temperature';
import { validateInput } from '../validation';

export const app = {
  initial: {
    dateTime: dateTime.initial,
    conditions: conditions.initial,
    temperature: {
      air: temperature.initial,
      water: temperature.initial
    }
  }
};

const validate = cell => {
  const errors = validateInput(cell.state);
  const message = _.isEmpty(errors) ? 'Valid!' : 'Invalid!';
  cell.update(state => Object.assign({}, state, { errors, message }));
};

export const App = ({ cell }) => (
  <div>
    <DateTime
      cell={cell.nest('dateTime')}
      validate={() => validate(cell)}
      errors={cell.state.errors}
      message={cell.state.message}
    />
    <Conditions cell={cell.nest('conditions')} />
    <Temperature cell={cell.nest('temperature').nest('air')} />
    <Temperature cell={cell.nest('temperature').nest('water')} />
  </div>
);
