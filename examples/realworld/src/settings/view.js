import { actions } from './actions';

export const Settings = ({ cell }) => {
  const state = cell.state;
  const errors = Object.keys(state.settings.errors || {}).map(
    (key) => `${key} ${state.settings.errors[key]}`
  );

  return ['.settings-page',
    ['.container page',
      ['.row',
        ['.col-md-6.offset-md-3.col-xs-12',
          ['h1.text-xs-center', 'Your Settings'],
          ['ul.error-messages', errors.map((error) => ['li', error])],
          ['form',
            ['fieldset',
              ['fieldset.form-group',
                ['input:text.form-control[placeholder=URL of profile picture]',
                  {
                    value: state.settings.image,
                    onInput: (evt) => actions.updateSettingsForm(cell, 'image', evt.target.value)
                  }]],
              ['fieldset.form-group',
                ['input:text.form-control.form-control-lg[placeholder=Your Name]',
                  {
                    value: state.settings.username,
                    onInput: (evt) => actions.updateSettingsForm(cell, 'username', evt.target.value)
                  }]],
              ['fieldset.form-group',
                ['textarea.form-control.form-control-lg[rows=8][placeholder=Short bio about you]',
                  {
                    value: state.settings.bio,
                    onInput: (evt) => actions.updateSettingsForm(cell, 'bio', evt.target.value)
                  }]],
              ['fieldset.form-group',
                ['input:text.form-control.form-control-lg[placeholder=Email]',
                  {
                    value: state.settings.email,
                    onInput: (evt) => actions.updateSettingsForm(cell, 'email', evt.target.value)
                  }]],
              ['fieldset.form-group',
                ['input:password.form-control.form-control-lg[placeholder=New Password]',
                  {
                    value: state.settings.password,
                    onInput: (evt) => actions.updateSettingsForm(cell, 'password', evt.target.value)
                  }]],
              ['button.btn.btn-lg.btn-primary.pull-xs-right[type=button]',
                {
                  onClick: () => actions.updateSettings(cell, state.settings)
                },
                'Update Settings']]],
          ['hr'],
          ['button.btn.btn-outline-danger[type=button]',
            {
              onClick: () => actions.logout(cell)
            },
            'Or click here to logout.']]]]];
};
