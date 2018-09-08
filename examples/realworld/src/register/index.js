import { LoginPage } from "../util/constants"
import { createCredentials } from "../credentials"

export const createRegister = ({ navigator, update }) => createCredentials({
  navigator,
  update,
  options: {
    method: "register",
    alternativePage: LoginPage,
    alternativeLabel: "Already have an account?",
    label: "Sign up",
    showUsername: true
  }
})
