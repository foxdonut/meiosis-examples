import { Effect } from "./effect"
import { Route } from "../router"
import { credentials, Credentials } from "../credentials"

const options = {
  method: "login",
  alternativePage: Route.Register,
  alternativeLabel: "Need an account?",
  label: "Sign in",
  showUsername: false
}

export const login = {
  Effect,
  ...credentials(options)
}

export const Login = Credentials(options)
