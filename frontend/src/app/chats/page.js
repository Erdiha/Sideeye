"use client";
import Chat from "@/components/chatComponent/Chat";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../auth/AuthProvider";
import socket from "../../../server/socketIO";

function Chats() {
  const [showChat, setShowChat] = useState(false); // State to toggle between chat list and chat view on mobile
  const chatPageRef = useRef(null);

  const { user, session, signOut } = useAuth();

  console.log(user, session, signOut, "user,session, signOut");
  console.log("socket is", socket?.id, user);

  const hookObject = {
    showChat,
    setShowChat,
    socket,
    user,
    session,
  };

  useEffect(() => {
    socket.emit("userId", user?.id);
    // Listen for messages
    socket.on("chat message", (message) => {
      console.log("Received message:", message);
    });
    // Cleanup on component unmount
    return () => {
      socket?.off("chat message");
    };
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
    // Scroll to bottom on component mount
    scrollToBottom();
  }, []);

  return (
    <div
      ref={chatPageRef}
      id="chatPage"
      className=" flex items-center justify-evenly w-screen  h-screen flex-col bg-[--primary-dark] border-red-500 border-3"
    >
      <Chat {...hookObject} />
    </div>
  );
}

export default Chats;
