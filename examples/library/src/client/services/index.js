/* global SERVICE_URL */
import assoc from "crocks/helpers/assoc";

const verify = response => new Promise((resolve, reject) =>
  response.text().then(response.ok ? resolve : reject));

const toJson = response => new Promise((resolve, reject) =>
  response.ok ? response.json().then(resolve) : response.text().then(reject));

export const fetchOperations = () =>
  fetch(SERVICE_URL + "/api/operations").then(toJson);

export const fetchBooks = () =>
  fetch(SERVICE_URL + "/api/books").then(toJson);

const problemKey = (result, problem) => assoc(problem.isbn, problem, result);

export const fetchProblems = () =>
  fetch(SERVICE_URL + "/api/problems").then(toJson).then(problems =>
    problems.reduce(problemKey, {}));

export const startOperation = operation =>
  fetch(SERVICE_URL + "/api/operations", {
    method: "POST",
    headers: new Headers({"Content-Type": "application/json"}),
    body: JSON.stringify(operation)
  }).then(verify);
