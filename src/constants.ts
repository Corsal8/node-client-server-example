export const SERVER_HOST = "localhost";
export const SERVER_PORT = 3000;
export const SERVER_MAX_SIZE = 500_000;
export const SERVER_KEEP_ALIVE = 20_0000;

export const CLIENT_CHUNK_NUM = 10;
export const CLIENT_CHUNK = "ABCDEFGH".repeat(32);
export const CLIENT_CHUNK_INTERVAL = 2500;

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
