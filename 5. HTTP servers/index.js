const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now} : ${req.url} New req received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("homepage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`hi ${username}`);
                break;
            default:
                res.end("404 page not found");
                break;
        }
    })
})

myServer.listen(8000, () => console.log("Server started"));