// socketServer.js
import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "*", // Adjust this to match your client's URL for security
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // Handle chat messages
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // Broadcast the message to all connected clients
  });
});

const PORT = 3001; // Use a different port from your Next.js app
io.listen(PORT);
console.log(`Socket.IO server listening on port ${PORT}`);
