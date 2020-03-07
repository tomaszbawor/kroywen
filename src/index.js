import express from "express";

const application = express();
const appPort = 3000;

application.get("/", (request, response) => {
  response.send("Hello from the server");
});

application.listen(appPort, () =>
  console.log(`Application listening on port: ${appPort}`)
);
