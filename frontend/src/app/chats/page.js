"use client";
import Chat from "@/components/chatComponent/Chat";
import { useEffect, useRef, useState } from "react";

function Chats() {
  const [showChat, setShowChat] = useState(false); // State to toggle between chat list and chat view on mobile
  const chatPageRef = useRef(null);

  const hookObject = {
    showChat,
    setShowChat,
  };

  const chatsData = [
    {
      title: "John Doe",
      value: "chat1",
      content: <Chat showChat={showChat} setShowChat={setShowChat} />,
    },
    {
      title: "Jane Smith",
      value: "chat2",
      content: <Chat showChat={showChat} setShowChat={setShowChat} />,
    },
    {
      title: "Alex Johnson",
      value: "chat3",
      content: <Chat showChat={showChat} setShowChat={setShowChat} />,
    },
  ];

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
