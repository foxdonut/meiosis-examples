/*global process*/
var app = require("./app");

var port = process.env.PORT || 3000;

app.listen(port);

/*eslint no-console:"off"*/
console.log("Server is listening on port", port);

