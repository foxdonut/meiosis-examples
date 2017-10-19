# Setup Examples

This section contains the code examples for setting up the
[Meiosis](http://meiosis.js.org) pattern for several virtual DOM libraries.

To run these examples locally, first clone the Github repository:

```
git clone https://github.com/foxdonut/meiosis-examples
```

Run a simple HTTP server from the `meiosis-examples` directory. Using Python below, but any other way of
serving a directory will work, choose your favourite.

```
cd meiosis-examples
python -m SimpleHTTPServer 3000
```

Open http://localhost:3000 in your browser.

In another terminal window, build the examples:

```
cd meiosis-examples/examples/setup
npm i
npm start
```

Every time you change the code, you need to re-run `npm start` to rebuild the example. To avoid having to do
that, you can also run this command:

```
npm run watch
```

This will automatically rebuild the examples when you make changes.

