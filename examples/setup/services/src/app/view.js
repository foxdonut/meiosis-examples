import m from 'mithril';

export const view = (cell) => [
  m(
    'div',
    { style: { marginBottom: '10px' } },
    m(
      'a',
      {
        href: '#',
        onclick: (evt) => {
          evt.preventDefault();
          cell.update({ page: 'Home' });
        }
      },
      'Home'
    ),
    m('span', ' | '),
    m(
      'a',
      {
        href: '#',
        onclick: (evt) => {
          evt.preventDefault();
          cell.update({ page: 'Login' });
        }
      },
      'Login'
    ),
    m('span', ' | '),
    m(
      'a',
      {
        href: '#',
        onclick: (evt) => {
          evt.preventDefault();
          cell.update({ page: 'Data' });
        }
      },
      'Data'
    )
  ),
  cell.state.page === 'Home'
    ? m('h4', 'Home page')
    : cell.state.page === 'Login'
    ? [
        m('h4', 'Login page'),
        m(
          'div',
          {
            style: {
              width: '300px',
              display: 'grid',
              gridTemplateColumns: '1fr 3fr',
              gridGap: '5px'
            }
          },
          m('span', 'Username:'),
          m('input[type=text]', {
            value: cell.state.login.username,
            oninput: (evt) =>
              cell.update({
                login: { username: evt.target.value }
              })
          }),
          m('span', 'Password:'),
          m('input[type=password]', {
            value: cell.state.login.password,
            oninput: (evt) =>
              cell.update({
                login: { password: evt.target.value }
              })
          })
        )
      ]
    : cell.state.page === 'Data'
    ? [
        m('h4', 'Data page'),
        cell.state.data === 'loading'
          ? m('div', 'Loading, please wait...')
          : m(
              'ul',
              cell.state.data.map((item) => m('li', item))
            )
      ]
    : null
];
