const express = require("express");
const fs = require("fs");
const app = express();
const port = 5000;

app.set("View engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const filePaths = getJsFilePaths();
  res.render("index.ejs", { filePaths });
});

app.get("/about", (req, res) => {
  const filePaths = getJsFilePaths();
  res.render("about.ejs", { filePaths });
});

app.listen(port, () => {
  console.log("app listening at http://localhost:5000");
});

function getJsFilePaths() {
  const filePaths = {};
  fs.readdirSync("./public/js").forEach((file) => {
    if (file.includes("main")) {
      filePaths.main = `js/${file}`;
    }
    if (file.includes("polyfills")) {
      filePaths.polyfills = `js/${file}`;
    }
    if (file.includes("runtime")) {
      filePaths.runtime = `js/${file}`;
    }
  });
  return filePaths;
}
