import { service } from './service';
import { Route } from '../router';
import { Credentials } from '../credentials';

const options = {
  method: 'register',
  alternativePage: Route.Login,
  alternativeLabel: 'Already have an account?',
  label: 'Sign up',
  showUsername: true
};

export const register = {
  service
};

export const Register = Credentials(options);
