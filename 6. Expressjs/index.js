const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.end("hello from home page");
})
app.get("/about", (req, res) => {
    res.end(`hello from about page and also hey from ${req.query.name  }`);
})
const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("Server started!"));
