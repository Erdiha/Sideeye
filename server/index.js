const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
// In your server/index.js or wherever you set up your Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow only the frontend origin to connect
    methods: ["GET", "POST"], // Allow only these HTTP methods
  },
});

// server/index.js
io.on("connection", (socket) => {
  let userId; // Declare a variable to store the user ID

  socket.on("userId", (id) => {
    userId = id; // Store the user ID in the variable
    console.log(`User with ID ${userId} connected`);
    socket.userId = userId; // You can also associate the user ID with the socket instance
  });

  socket.on("chat message", (message) => {
    
    console.log(`Message from user ${userId}:`, message);
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log(`User with ID ${userId} disconnected`); // Use the userId variable here
  });
});

server.listen(3001, () => {
  console.log("Socket.IO server running on port 3001");
});

// //middleware
// app.use(cors());
// app.use(express.json());

// //////////////////////ROUTES///////////////////////////

// //create
// app.route("/user", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const newUser = await pool.query(
//       "INSERT INTO users (username,email,password) VALUES($1,$2,$3) RETURNING *",
//       [username, email, password]
//     );
//     res.json(newUser.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
// //get

// //post

// //delete

// //port listen
// app.listen(5000, () => {
//   console.log("server has started on port 5000");
// });
