import { Route } from "../routes"
import { credentials, Credentials } from "../credentials"
import { service } from "./service"

const options = {
  method: "login",
  alternativePage: Route.Register(),
  alternativeLabel: "Need an account?",
  label: "Sign in",
  showUsername: false
}

export const login = Object.assign({ service }, credentials(options))

export const Login = Credentials(options)
