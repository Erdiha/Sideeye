"use client";
import Chat from "@/components/chatComponent/Chat";
import ChatList from "@/components/chatComponent/ChatList";
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
    if (chatPageRef.current) {
      const { scrollHeight } = chatPageRef.current;
      chatPageRef.current.scroll({
        top: scrollHeight,
        behavior: "smooth",
        Animation,
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
      {/* <Tippy animation="fade" content="Go Home">
        <Link
          href="/saloon"
          className=" flex self-start justify-center items-center rounded-full my-3 mx-4  border-2 border-gray-300 h-10  aspect-square
          bg-[--primary-dark] fixed top-0"
        >
          <House color="white" weigth="bold" size={20} />
        </Link>
      </Tippy> */}
      <ChatList {...hookObject} />
      {/* <Tabs
        tabs={chatsData}
        containerClassName="my-container-class"
        activeTabClassName="my-active-tab-class"
        tabClassName="my-tab-class"
        contentClassName="my-content-class"
        showChat={showChat}
        setShowChat={setShowChat}
      /> */}
    </div>
  );
}

export default Chats;
