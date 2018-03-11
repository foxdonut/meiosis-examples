var fs = require("fs");

var linkMap = {
  "mithril": "https://unpkg.com/mithril"
};

var input = fs.readFileSync("./lessons/01-hello-world-lesson.md", "ascii");
var lines = input.split("\n");
var flemNumber = 1;

lines = lines.map(function(line) {
  if (line.startsWith("@flems")) {
    var parts = line.split(" ");

    var files = parts[1].split(",");
    var fileContents = files.map(filename => {
      var file = JSON.stringify(fs.readFileSync(filename, "ascii"));
      return `{name: "${filename}", content: ${file}}`;
    });
    var fileString = "[" + fileContents.join(",") + "]";

    var links = parts[2].split(",");
    var linkContents = links.map(link => {
      var url = linkMap[link];
      return `{name: "${link}", type: "js", url: "${url}"}`;
    });
    var linkString = "[" + linkContents.join(",") + "]";

    line = `
<div id="flems${flemNumber}"></div>

<script>
  window.Flems(flems${flemNumber}, {
    files: ${fileString},
    links: ${linkString}
  })
</script>
    `;

    flemNumber++;
  }
  return line;
});

lines.unshift("");
lines.unshift("<script src=\"https://flems.io/flems.html\" type=\"text/javascript\" charset=\"utf-8\"></script>");
var output = lines.join("\n");
fs.writeFileSync("lessons/test.md", output);
