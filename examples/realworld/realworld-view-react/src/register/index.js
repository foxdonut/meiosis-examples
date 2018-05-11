import { createCredentials } from "../credentials";

export const createRegister = update =>
  createCredentials(update, {
    path: ["register"],
    method: "register",
    alternativeLink: "/login",
    alternativeLabel: "Already have an account?",
    label: "Sign up",
    showUsername: true
  });
