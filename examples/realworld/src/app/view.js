import { Layout } from '../layout';
import { Home } from '../home';
import { Register } from '../register';
import { Login } from '../login';
import { ArticleDetail } from '../articleDetail';
import { ArticleEdit } from '../articleEdit';
import { Settings } from '../settings';
import { Profile } from '../profile';

const componentMap = {
  Home,
  Register,
  Login,
  ArticleDetail,
  ArticleCreate: ArticleEdit,
  ArticleEdit,
  Settings,
  Profile,
  ProfileFavorites: Profile
};

export const App = ({ cell }) => {
  const Component = componentMap[cell.state.route.value];
  return Layout({ cell, Component });
};
