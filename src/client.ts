import net from "net";
import {
  CLIENT_CHUNK,
  CLIENT_CHUNK_INTERVAL,
  CLIENT_CHUNK_NUM,
  SERVER_HOST,
  SERVER_PORT,
  sleep,
} from "./constants";

const REQUEST = `POST / HTTP/1.1
Host: ${SERVER_HOST}
Content-Length: ${CLIENT_CHUNK_NUM * CLIENT_CHUNK.length}
Content-Type: text/plain

`;

const client = new net.Socket();
client.connect(SERVER_PORT, SERVER_HOST, async () => {
  console.log("connected");

  client.write(REQUEST);
  for (let i = 0; i < CLIENT_CHUNK_NUM; i++) {
    client.write(CLIENT_CHUNK);
    await sleep(CLIENT_CHUNK_INTERVAL);
  }
});

client.on("data", (data) => {
  console.log(`data received:\r\n\r\n${data.toString("ascii")}`);
});

client.on("end", () => {
  console.log("connection closed");
});
