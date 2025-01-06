import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000;

const server = http.createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
        if (req.url === "/api" && req.method === "GET") {
            res.writeHead(200, {
                "Content-Type": "application/json",
            });
            res.write("Hi there, This is a Vanilla Node.js API")
            res.end();
        }
    }
);

server.listen(PORT, () => {
    console.log("server is running on port", PORT);
});