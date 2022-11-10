import express from "express";
import {
  SERVER_HOST,
  SERVER_KEEP_ALIVE,
  SERVER_MAX_SIZE,
  SERVER_PORT,
} from "./constants";

const PORT = 3000;
const HOST = "localhost";

const app = express();

app.use(
  express.raw({
    type: ["text/plain", "application/octet-stream"],
    limit: SERVER_MAX_SIZE,
  })
);

app.get("/", (req, res) => {
  console.log("hello");

  res.send("hello");
});

app.post("/", (req, res) => {
  const body = req.body as Buffer;

  console.log(body);
  console.log(body.toString("ascii"));
  console.log(body.toString("ascii").length);

  res.send("chunk received");
});

const server = app.listen(SERVER_PORT, SERVER_HOST, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);

// server.keepAliveTimeout = SERVER_KEEP_ALIVE;
