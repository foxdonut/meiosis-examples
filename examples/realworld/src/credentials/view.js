import { router } from '../router';
import { actions } from './actions';

export const Credentials =
  (options) =>
    ({ cell }) => {
      const id = options.method;

      const errors = Object.keys(cell.state[id].errors || {}).map(
        (key) => `${key} ${cell.state[id].errors[key]}`
      );

      return ['.auth-page',
        ['.container page',
          ['.row',
            ['.col-md-6.offset-md-3.col-xs-12',
              ['h1.text-xs-center', options.label],
              ['p.text-xs-center',
                ['a', { href: router.toUrl(options.alternativePage) }, options.alternativeLabel]],
              ['ul.error-messages', errors.map((error) => ['li', error])],
              ['div.error-messages', cell.state[id].errorMessage],
              ['form',
                options.showUsername && [
                  'fieldset.form-group',
                  [
                    'input:text.form-control.form-control-lg[placeholder=Username]',
                    {
                      value: cell.state[id].username || '',
                      onInput: (evt) =>
                        actions.updateCredForm(cell, id, 'username', evt.target.value)
                    }
                  ]
                ],
                ['fieldset.form-group',
                  ['input:text.form-control.form-control-lg[placeholder=Email]',
                    {
                      value: cell.state[id].email || '',
                      onInput: (evt) =>
                        actions.updateCredForm(cell, id, 'email', evt.target.value)
                    }]],
                ['fieldset.form-group',
                  ['input:password.form-control.form-control-lg[placeholder=Password]',
                    {
                      value: cell.state[id].password || '',
                      onInput: (evt) =>
                        actions.updateCredForm(cell, id, 'password', evt.target.value)
                    }]],
                ['button.btn.btn-lg.btn-primary.pull-xs-right[type=button]',
                  {
                    onClick: () => actions.sendCredentials(cell, id)
                  },
                  options.label]]]]]];
    };
