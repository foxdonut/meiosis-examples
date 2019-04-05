import { Route } from "../util/router"
import { Credentials } from "../credentials"
import { onNavigate } from "./onNavigate"

export const Login = Object.assign(
  { onNavigate },
  Credentials({
    method: "login",
    alternativePage: Route.of.Register(),
    alternativeLabel: "Need an account?",
    label: "Sign in",
    showUsername: false
  })
)
