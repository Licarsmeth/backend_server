const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

app.get("/contact", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.render("index", {message: "Ejs rocks!"});
/*  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).sendFile("File not found");
    }
  });*/
});

// Catch-all route for undefined paths
app.get("*", (req, res) => {
  const filePath = path.join(__dirname, "404.html");
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

app.listen(8000, () => {
  console.log("Now I'm using Express babyyy");
});
