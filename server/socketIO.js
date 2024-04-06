// utils/socket.js
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3001"; // Replace with your Socket.IO server URL
const socket = io(SOCKET_URL);

export default socket;
