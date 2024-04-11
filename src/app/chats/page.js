"use client";

import Chat from "@/components/chatComponent/Chat";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../auth/AuthProvider";
import socket from "../../../server/socketClient";

function Chats() {
  const [showChat, setShowChat] = useState(false);
  const chatPageRef = useRef(null);
  const { user, session, signOut } = useAuth();
  const [allUsers, setAllUsers] = useState([]);
  const [clickedUser, setClickedUser] = useState(null);

  useEffect(() => {
    if (user) {
      socket.emit("userId", user.id);

      socket.on("users", (users) => {
        console.log("users from socket", users);
        setAllUsers(users);
      });

      socket.on("chat message", (message) => {
        console.log("Received message:", message);
      });

      return () => {
        socket.off("users");
        socket.off("chat message");
      };
    }
  }, [user]);

  const scrollToBottom = () => {
    if (typeof window !== "undefined" && chatPageRef.current) {
      const { scrollHeight } = chatPageRef.current;
      chatPageRef.current.scroll({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const hookObject = {
    showChat,
    setShowChat,
    socket,
    user,
    session,
    clickedUser,
    setClickedUser,
    allUsers,
  };

  return (
    <div
      ref={chatPageRef}
      id="chatPage"
      className="flex items-center justify-evenly w-screen h-screen flex-col bg-[--primary-dark] border-red-500 border-3"
    >
      <Chat {...hookObject} />
    </div>
  );
}

export default Chats;
