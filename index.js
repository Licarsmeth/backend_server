let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer(function (req, res) {
    let urlname = url.parse(req.url, true);
    let filename = "." + urlname.pathname + ".html";

    //if pathname is not empty
    if (filename != "./.html") {
      fs.readFile(filename, function (err, data) {
        //error in anything
        if (err) {
          fs.readFile("./404.html", function (err404, data404) {
            //error if 404.html not found
            if (err404) {
              res.writeHead(404, { "Content-Type": "text/html" });
              res.write("404 not found");
              return res.end();
            }
            //404.html found
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data404);
            return res.end();
          });
        }
        // proper path found
        else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
    }
    //if only localhost:8080 show index.html
    else {
      fs.readFile("./index.html", function (errIndex, dataIndex) {
        if (errIndex) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 not found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(dataIndex);
        return res.end();
      });
    }
  })
  .listen(8080);
