import { RegisterPage } from "../util/constants"
import { createCredentials } from "../credentials"

export const createLogin = ({ navigator, update }) => createCredentials({
  navigator,
  update,
  options: {
    method: "login",
    alternativePage: RegisterPage,
    alternativeLabel: "Need an account?",
    label: "Sign in",
    showUsername: false
  }
})
