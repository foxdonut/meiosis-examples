# Meiosis Realworld example

This is a Meiosis implementation of the [realworld](https://github.com/gothinkster/realworld) example.

To run the `realworld` example, we need to run a server for the backend, and another for the
frontend. The code in this example is for the frontend only; we will use a provided
Node.js backend. You can also use a different backend from the
[list of provided backends](https://github.com/gothinkster/realworld/#backends)

## Setup - Backend - Sqlite + Hapi Pal

To set up the backend:

```
git clone https://github.com/devinivy/hapipal-realworld-example-app
cd hapipal-realworld-example-app
npm i
cp server/.env-keep server/.env
```

Edit `server/.env` and set a value for `APP_SECRET`. See
[https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) for details on `.env`
files.

Then start the server with `npm start`. The default port is `3000`, but you can set a different
port with e.g. `PORT=8000 npm start` or setting `PORT` in `server/.env`.

The frontend should now be able to send requests to the backend. As a quick sanity check, you
can check an endpoint, for example `http://localhost:<port>/api/articles`.

The server uses Sqlite3, and creates a `.<NODE_ENV>.db` file, or `.tmp.db` file by default.

## Setup - Backend - MongoDB + Express

Prerequisite: [install MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#tutorials)

Then, set up the backend:

```
git clone https://github.com/gothinkster/node-express-realworld-example-app
cd node-express-realworld-example-app
npm i
npm run dev
```

## Setup - Frontend

Edit the `src/services/index.js` file and change the `API_ROOT` constant to
the URI of the backend that you are running. You can also try using the online backend by
setting the value to `https://conduit.productionready.io/api`.
