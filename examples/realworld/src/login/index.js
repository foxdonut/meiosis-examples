import { Route } from "../util/router"
import { Credentials } from "../credentials"

export const Login = Credentials({
  method: "login",
  alternativePage: Route.of.Register,
  alternativeLabel: "Need an account?",
  label: "Sign in",
  showUsername: false
})
