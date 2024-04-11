// let allUsers = [];

// function isValidUserId(id) {
//   const uuidRegex =
//     /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
//   return uuidRegex.test(id);
// }

// function setupSocketEvents(io) {
//   io.on("connection", (socket) => {
//     let userId;

//     socket.on("userId", (id) => {
//       if (isValidUserId(id)) {
//         userId = id;
//         console.log(`User with ID ${userId} connected`);
//         socket.userId = userId;

//         const user = { id: id, socket: socket.id };
//         if (!allUsers.some((existingUser) => existingUser.id === id)) {
//           allUsers.push(user);
//         }

//         io.emit("users", allUsers);
//       } else {
//         console.log(`Invalid user ID: ${id}`);
//       }
//     });

//     socket.on("chat message", (message) => {
//       console.log(
//         `Message from user ${userId} to user ${message.receiverId}:`,
//         message.text
//       );
//       const receiver = allUsers.find((user) => user.id === message.receiverId);
//       if (receiver) {
//         io.to(receiver.socket).emit("chat message", message);
//       }
//     });

//     socket.on("disconnect", () => {
//       allUsers = allUsers.filter((user) => user.id !== userId);
//       console.log(`User with ID ${userId} disconnected`);
//       io.emit("users", allUsers);
//     });
//   });
// }

// module.exports = setupSocketEvents;
