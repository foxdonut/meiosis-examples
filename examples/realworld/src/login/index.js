import { service } from "./service"
import { Route } from "../router"
import { Credentials } from "../credentials"

const options = {
  method: "login",
  alternativePage: Route.Register,
  alternativeLabel: "Need an account?",
  label: "Sign in",
  showUsername: false
}

export const login = {
  service
}

export const Login = Credentials(options)
