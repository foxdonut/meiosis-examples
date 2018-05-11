import { credentials } from "../credentials";

export const login = {
  create: update => credentials.create(update, {
    path: ["login"],
    method: "login",
    alternativeLink: "/register",
    alternativeLabel: "Need an account?",
    label: "Sign in",
    showUsername: false
  })
};
