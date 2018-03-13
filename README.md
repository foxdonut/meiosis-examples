# meiosis-examples

Examples for the [Meiosis](http://github.com/foxdonut/meiosis) library.

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

Of course, you can use another tool of your choice to start an HTTP server.

You will see two tables of all the examples. The first table is organized by view library, while the second is organized by example.

Without Node, you can run all the examples except for those under the `node modules` environment.

## Running With Node

From the root of the `meiosis-examples` directory, execute this command:

```
npm start
```

Be patient, this will take some time on the first run, while all the npm modules are installed. The command will take much less time on subsequent runs.

Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser.
