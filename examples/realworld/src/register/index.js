import { Effect } from "./effect"
import { Route } from "../router"
import { credentials, Credentials } from "../credentials"

const options = {
  method: "register",
  alternativePage: Route.Login,
  alternativeLabel: "Already have an account?",
  label: "Sign up",
  showUsername: true
}

export const register = {
  Effect,
  ...credentials(options)
}

export const Register = Credentials(options)
