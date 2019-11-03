import { Route } from "../routes"
import { credentials, Credentials } from "../credentials"
import { service } from "./service"

const options = {
  method: "register",
  alternativePage: Route.Login(),
  alternativeLabel: "Already have an account?",
  label: "Sign up",
  showUsername: true
}

export const register = Object.assign({ service }, credentials(options))

export const Register = Credentials(options)
