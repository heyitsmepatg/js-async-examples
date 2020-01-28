const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", req.headers.origin);

    // Route for answer
    if (req.url.indexOf("answer") > -1) {
      console.log("Received request to get answer...");
      setTimeout(() => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ answer: "42" }));
      }, 4000);
    } else if (req.url.indexOf("save-response") > -1) {
      console.log("Received request to save answer...");
      setTimeout(() => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ response: "saved" }));
      }, 1000);
    } else if (req.url.indexOf("tell-friends") > -1) {
      console.log("Received request to tell friends...");
      setTimeout(() => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ response: "friends have been told!" }));
      }, 1000);
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(3000);

console.log("Now listening on port 3000");

// Delaying response by 3 seconds
const respondWithAnswer = (req, res) => {};
