import { Route } from "../util/router"
import { Credentials } from "../credentials"
import { onNavigate } from "./onNavigate"

export const Register = Object.assign(
  { onNavigate },
  Credentials({
    method: "register",
    alternativePage: Route.of.Login(),
    alternativeLabel: "Already have an account?",
    label: "Sign up",
    showUsername: true
  })
)
