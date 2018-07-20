# Meiosis Realworld example

This is a Meiosis implementation of the [realworld](https://github.com/gothinkster/realworld) example.

To run the `realworld` example, we need to run a server for the back-end, and another for the
front-end. The code in this example is for the front-end only; we will use a provided
[Node.js back-end](https://github.com/gothinkster/node-express-realworld-example-app).

## Setup - Back-end

Prerequisite: [install MongoDB Community Edition](https://docs.mongodb.com/manual/installation/#tutorials)

Then, set up the back-end:

```
git clone https://github.com/gothinkster/node-express-realworld-example-app
cd node-express-realworld-example-app
npm i
npm run dev
```

## Setup - Front-end

