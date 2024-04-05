"use client";

import CustomTooltip from "@/ui/Tippy";
import { ArrowLeft, PaperPlaneTilt, Plus } from "@phosphor-icons/react";
import Tippy from "@tippyjs/react";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";

import { useAuth } from "../../../auth/AuthProvider";
import { useWindowSize } from "../utilityComponents/Windowsize";
import { ChatBubbleCurrentUser, ChatBubbleFriend } from "./ChatBubbles";
import ChatList from "./ChatList";

function Chat(hookObjects) {
  const { showChat, setShowChat, socket } = hookObjects;
  const chatWindowRef = useRef(null);
  const chatWrapperRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const getSize = useWindowSize();
  const router = useRouter();
  const { user, allUsers } = useAuth();
  const [currentUserText, setCurrentUserText] = useState({
    userId: "",
    socketId: "",
    message: "",
  });
  useEffect(() => {
    // Scroll to bottom on component mount
    scrollToBottomWrapper();
    scrollToBottom();
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [messages]);

  // Function to send a message
  const sendMessage = (message) => {
    socket.emit("chat message", message);
  };

  const scrollToBottomWrapper = () => {
    if (chatWrapperRef.current) {
      const { scrollHeight } = chatWrapperRef.current;
      chatWrapperRef.current.scroll({
        bottom: scrollHeight,
        behavior: "smooth",
        Animation,
      });
    }
  };
  const scrollToBottom = () => {
    if (chatWindowRef.current) {
      const { scrollHeight } = chatWindowRef.current;
      chatWindowRef.current.scroll({
        top: scrollHeight,
        behavior: "smooth",
        Animation,
      });
    }
  };

  const handleChange = (e) => {
    console.log("handlechange", e.target.value);

    setCurrentUserText({
      ...currentUserText,
      message: e.target.value,
    });
  };

  // useDebouncedEffect(
  //   () => {
  //     alert("stopped typing");
  //     const { userId, socketId, message } = currentUserText;
  //     if (userId && socketId && message) {
  //       sendMessage({ userId, socketId, message });
  //       setCurrentUserText({
  //         userid: "",
  //         socketId: "",
  //         message: "",
  //       });
  //     }
  //   },
  //   3000,
  //   [currentUserText.message]
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userId, socketId, message } = currentUserText;

    sendMessage({ userId: user.id, socketId: socket.id, message });
    setCurrentUserText({
      userid: "",
      socketId: "",
      message: "",
    });
  };

  console.log("message and users are", messages, allUsers);
  return (
    <div ref={chatWrapperRef} className=" flex chat rounded">
      {/*/////////////////////////////////////////*/}
      {/*chat list*/}
      <div className="w-1/8 h-full ">
        <ChatList hookObjects={hookObjects} />
      </div>

      {/*/////////////////////////////////////////*/}
      {/*chat content*/}
      <div className="chatWrapper custom-chat-height rounded">
        <section className="flex items-center p-4 border-b-4 border-b-[--primary-dark-50]">
          <Tippy content={showChat ? "Go Home" : "Back"}>
            <button
              onClick={() => router.back()}
              className="w-8 h-8 p-1 rounded-full bg-[--primary-dark-50] "
            >
              <ArrowLeft
                className="w-full h-full rounded-full text-[--primary-text]"
                size={20}
                weight="bold"
              />
            </button>
          </Tippy>
        </section>
        {/*messages will go here */}
        <section
          ref={chatWindowRef}
          className="flex flex-col overflow-auto px-2 py-4 gap-5   h-full w-full bg-[--primary-dark-] "
        >
          {messages.map((msg) => (
            <div key={msg.id} className={`flex w-full h-fit bg-transparent`}>
              {msg.sender === "User" ? (
                <ChatBubbleCurrentUser text={msg.text} imgSrc="/me.jpg" />
              ) : (
                <ChatBubbleFriend text={msg.text} imgSrc="/me.jpg" />
              )}
            </div>
          ))}
        </section>
        {/* Chat input area /send will go here */}
        <section className="w-full h-20 bg- p-4 flex  items-stretch justify-around gap-2 text-[--primary-text] font-bold border-t-2 border-t-[--primary-dark-50]">
          <CustomTooltip content="Add Files">
            <button className="rounded-full w-8 h-8 aspect-square items-center justify-center flex self-center">
              <Plus
                color="white"
                className="w-full h-full border-[#8c90a8] border-[1px] rounded p-1"
                size={20}
                weight="thin"
              />
            </button>
          </CustomTooltip>
          <div className="flex w-full h-full relative justify-center items-center">
            <input
              className="p-2 bg-slate-800 text-md text-[--primary-text] font-normal w-full rounded-full pr-2"
              type="text"
              placeholder="type something..."
              onChange={handleChange}
              value={currentUserText.message}
            />
          </div>
          <CustomTooltip content="send">
            <button
              onClick={handleSubmit}
              className="rounded-full w-8 h-8 aspect-square items-center justify-center flex self-center"
            >
              <PaperPlaneTilt
                className="w-full h-full border-[#8c90a8] border-[1px] rounded p-1"
                weight="thin"
                size={20}
              />
            </button>
          </CustomTooltip>
        </section>
      </div>
    </div>
  );
}

export default Chat;
