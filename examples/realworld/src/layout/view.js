import { Route, router } from '../router';
import { get } from '../util/fp';

const Header = ({ cell }) => {
  const active = (pageId) => ({ className: { active: cell.state.route.value === pageId } });

  return [
    'nav.navbar.navbar-light',
    [
      '.container',
      ['a.navbar-brand', { href: router.toUrl(Route.Home) }, 'conduit'],
      ['a', { href: '/index.html' }, 'Back to list of examples'],
      ['span', ' | '],
      [
        'a',
        {
          href: 'https://github.com/foxdonut/meiosis-examples/tree/master/examples/realworld',
          target: '_blank'
        },
        'Source code'
      ],
      [
        'ul.nav.navbar-nav.pull-xs-right',
        ['li.nav-item', active('Home'), ['a.nav-link', { href: router.toUrl(Route.Home) }, 'Home']],
        cell.state.user
          ? [
              [
                'li.nav-item',
                active('ArticleCreate'),
                [
                  'a.nav-link',
                  { href: router.toUrl(Route.ArticleCreate) },
                  ['i.ion-compose'],
                  ' New Article'
                ]
              ],
              [
                'li.nav-item',
                active('Settings'),
                [
                  'a.nav-link',
                  { href: router.toUrl(Route.Settings) },
                  ['i.ion-gear-a'],
                  ' Settings'
                ]
              ],
              [
                'li.nav-item',
                {
                  className: {
                    active:
                      (cell.state.route.value === 'Profile' ||
                        cell.state.route.value === 'ProfileFavorites') &&
                      get(cell.state, ['user', 'username']) ===
                        get(cell.state, ['profile', 'username'])
                  }
                },
                [
                  'a.nav-link',
                  { href: router.toUrl(Route.Profile, { username: cell.state.user.username }) },
                  cell.state.user.username
                ]
              ]
            ]
          : [
              [
                'li.nav-item',
                active('Login'),
                ['a.nav-link', { href: router.toUrl(Route.Login) }, 'Sign in']
              ],
              [
                'li.nav-item',
                active('Register'),
                ['a.nav-link', { href: router.toUrl(Route.Register) }, 'Sign up']
              ]
            ]
      ]
    ]
  ];
};

const Footer = () => [
  'footer',
  [
    '.container',
    ['a.logo-font', { href: router.toUrl(Route.Home) }, 'conduit'],
    [
      'span.attribution',
      'An interactive learning project from ',
      ['a[href=https://thinkster.io]', 'Thinkster'],
      ['span', { innerHTML: '. Code &amp; design licensed under MIT.' }]
    ]
  ]
];

export const Layout = ({ cell, Component }) => [
  'div',
  Header({ cell }),
  Component({ cell }),
  Footer()
];
