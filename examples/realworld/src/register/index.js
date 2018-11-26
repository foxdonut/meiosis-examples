import { Route } from "../util/router"
import { Credentials } from "../credentials"

export const Register = Credentials({
  method: "register",
  alternativePage: Route.of.Login(),
  alternativeLabel: "Already have an account?",
  label: "Sign up",
  showUsername: true
})
