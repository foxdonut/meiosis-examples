import { RegisterPage } from "../util/constants"
import { Credentials } from "../credentials"

export const Login = Credentials({
  method: "login",
  alternativePage: RegisterPage,
  alternativeLabel: "Need an account?",
  label: "Sign in",
  showUsername: false
})
