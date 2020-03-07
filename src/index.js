import express from "express";
import logger from "./common/logger.js";

const application = express();
const appPort = 3000;

application.get("/", (request, response) => {
  response.send("Hello from the server");
});

application.listen(appPort, () =>
  logger.info(`Application listening on port: ${appPort}`)
);
