// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
// const setupExpressRoutes = require("./expressRoutes");
// const setupSocketEvents = require("./socketServer");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// app.use(express.json());
// app.use(cors());

// // Set up Express routes
// setupExpressRoutes(app);

// // Set up Socket.IO events
// setupSocketEvents(io);

// server.listen(3001, () => {
//   console.log("Server running on port 3001");
// });
