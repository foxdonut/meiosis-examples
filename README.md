# meiosis-examples

Examples for the [Meiosis](http://github.com/foxdonut/meiosis) library.

This repository contains the following examples:

- Simple Counter
- Rocket Launcher<sup>1</sup>
- Labeled Sliders
- Todo List With Server
- TodoMVC<sup>2</sup>

<sup>1</sup> Rocket Launcher example idea credit: [Jean-Jacques Dubray](http://www.ebpml.org/about)

<sup>2</sup> Todo MVC example idea credit: [todomvc.com](http://todomvc.com)

The examples use the following view libraries (not all examples are demonstrated with all view libraries):

- React
- Snabbdom
- Mithril
- Vue
- Riot
- VanillaJS

You can obtain the examples by cloning the git repository:

```
git clone https://github.com/foxdonut/meiosis-examples
```

## Running Without Node

You can run some of the examples without Node. From the root of the `meiosis-examples` directory, start an HTTP server. For example, this can be done with Python 2:

```
python -m SimpleHTTPServer
```

Or Python 3:

```
python3 -m http.server
```

Then, open [http://localhost:8000](http://localhost:8000) in your browser. You can use a different port number by specifying it at the end of the Python command.

You will see two tables of all the examples. The first table is organized by view library, while the second is organized by example.

Without Node, you can run all the examples except for those under the `node modules` environment.

## Running With Node

From the root of the `meiosis-examples` directory, execute this command:

```
npm start
```

Be patient, this will take some time on the first run, while all the npm modules are installed. The command will take much less time on subsequent runs.

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser.

You will see two tables of all the examples. The first table is organized by view library, while the second is organized by example.

For the examples under the `node modules` environment, you will need to regenerate the application to see your changes. Go to the directory of the example and use `npm start` to regenerate. For example:

```
cd examples/todomvc
npm start
```

This will regenerate the bundles for all view libraries. To automatically regenerate the bundle for a specific view library and avoid having to run a command every time you make a change, use this command:

```
VARIANT=react npm run watch
```

This will work for the `react` view library. Replace with `mithril`, `snabbdom`, `vanillajs`, `vue`, or `riot` depending on the view library and the example. Not all view libraries are in every example.

Finally, note that the `labeled-sliders` example only uses Snabbdom, so you can simply use `npm run watch` under the `examples/labeled-sliders` directory to watch for changes and automatically regenerate the application.

## CodePen examples

In the example index, you will also find some examples under the `codepen` environment. You can run these examples directly in your browser without installing anything locally.
