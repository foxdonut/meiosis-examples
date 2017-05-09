import { credentials } from "../credentials";

export const register = {
  create: update => credentials.create(update, {
    path: ["register"],
    method: "register",
    alternativeLink: "/login",
    alternativeLabel: "Already have an account?",
    label: "Sign up",
    showUsername: true
  })
};
