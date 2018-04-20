# meiosis-examples

Examples for the [Meiosis](http://github.com/foxdonut/meiosis) library.

You can obtain the examples by cloning the git repository:

```
git clone https://github.com/foxdonut/meiosis-examples
```

## Starting the static server

To start the static server, go to the `meiosis-examples` directory and run:

```
npm i
npm start
```

Note that you only need to run `npm i` once. Afterwards, you can just run `npm start` each time you want to start the server.

Then, open [http://localhost:3000](http://localhost:3000) in your browser. You can use a different port number by specifying it in the `package.json`
file under the `"start"` script.

Of course, you can use another tool of your choice to start an HTTP server.

You will see two tables of all the examples. The first table is organized by view library, while the second is organized by example.

## Building an example

Before running an example, you need to build it. Go to the directory of the example, such as `examples/todomvc`, and run:

```
npm i
npm start
```

Again, you only need `npm i` the first time.

Once built, you can view the example by navigating to it from the examples index page at [http://localhost:3000](http://localhost:3000).

If you want to experiment with the code and see your changes, you need to run `npm start` every time you want to rebuild the example. To avoid
having to do this, use instead:

```
npm run watch
```

This will automatically rebuild the example when you make changes to the source code.
