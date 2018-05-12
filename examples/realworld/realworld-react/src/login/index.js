import { createCredentials } from "../credentials";

export const createLogin = update =>
  createCredentials(update, {
    path: ["login"],
    method: "login",
    alternativeLink: "/register",
    alternativeLabel: "Need an account?",
    label: "Sign in",
    showUsername: false
  });
