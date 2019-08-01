# Meiosis Realworld example

This is a Meiosis implementation of the [realworld](https://github.com/gothinkster/realworld)
example. It uses [meiosis-setup](https://meiosis.js.org/setup) and
[meiosis-routing](https://meiosis.js.org/routing).

## seview + React, Preact, or Mithril

The example uses [seview](https://github.com/foxdonut/seview) to make the views decoupled from the
view library. You can easily switch between [React](https://reactjs.org),
[Preact](https://preactjs.com), or [Mithril](https://mithril.js.org) by editing `src/util/view.js`
and commenting/uncommenting the appropriate section of code.

## Setup

The code in this example is for the frontend only; we will use a provided Node.js backend. By
default, the example uses the online server provided at:

```
https://conduit.productionready.io
```

You can check the availability by accessing an API, for example:

https://conduit.productionready.io/api/articles

## Setup - Frontend

To run the frontend, first install the dependencies:

```
cd meiosis-examples/examples/realworld
npm ci
```

Then, you can either A) build the example:

```
npm start
```

or B) auto-rebuild:

```
npm run watch
```

For the server, you can either A) start the server:

```
npm run server
```

or B) auto-reload the changes:

```
npm run reload
```

Finally, open http://localhost:3000.

## Setup - Backend - Sqlite + Hapi Pal

By default, the example uses the online backend provided at https://conduit.productionready.io.
Other frontends connect to this backend, which means you see other people's data.

You can also run your own private backend locally. Below, we use a backend that does not need any
external dependencies (MongoDB, etc.). You can also use a different backend from the
[list of provided backends](https://github.com/gothinkster/realworld/#backends).

The backend uses [Hapi Pal](https://hapipal.com/) and [SQLite](https://www.sqlite.org/index.html)
and is developed by [Devin Ivy](https://github.com/devinivy). To set up this backend:

```
git clone https://github.com/devinivy/hapipal-realworld-example-app
cd hapipal-realworld-example-app
npm ci
cp server/.env-keep server/.env
```

Edit `server/.env` and set a value for `APP_SECRET`. Also set a port number, e.g. `PORT=4000`. See
[https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) for details on `.env`
files.

Then start the server with `npm start`.

On the frontend, edit the `src/services/index.js` file and change the `API_ROOT` constant to the URI
of the backend that you are running: `const API_ROOT = "http://localhost:4000/api"`.

The frontend should now be able to send requests to the backend. As a quick sanity check, you can
check an endpoint, for example `http://localhost:4000/api/articles`.

The server uses Sqlite3, and creates a `.<NODE_ENV>.db` file, or `.tmp.db` file by default.
