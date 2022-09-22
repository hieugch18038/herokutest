const http = require("http");
const port = 9000;
const app = http.createServer((req, res) => {
    res.write("<h1>Hello world</h1>");
    res.write("<h3>My node js page</h3>");
    res.end();
});
app.listen(port);