"use client";

import CustomTooltip from "@/ui/Tippy";
import { ArrowLeft, PaperPlaneTilt, Plus } from "@phosphor-icons/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Tippy from "@tippyjs/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../auth/AuthProvider";
import { useWindowSize } from "../utilityComponents/Windowsize";
import { ChatBubbleCurrentUser, ChatBubbleFriend } from "./ChatBubbles";

function Chat({ showChat, setShowChat }) {
  const chatWindowRef = useRef(null);
  const chatWrapperRef = useRef(null);
  const getSize = useWindowSize();
  const router = useRouter();
  const { user } = useAuth();
  const [getData, setGetData] = useState();
  const supabase = createClientComponentClient();
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        console.log("User data:", data);
        setGetData(data);
      }
    };

    getUser();
  }, []);
  console.log("user", getData);
  const messages = [
    { id: 1, text: "Hello, how are you? sdfsd sdfdssdfdsf", sender: "User" },
    { id: 2, text: "I'm good, thanks! How about you?", sender: "Friend" },
    {
      id: 3,
      text: "I'm doing well. Excited to chat! zsfsdfsafa sdfdsfdsf sdfdsfds sdfdsfsdfds sdfdsf a aa aaa",
      sender: "User",
    },
    {
      id: 4,
      text: "I'm also doing well. How about you? zxdfdsfsdfdsfsdfsdfsdfsdfsdfdsfsdfdsfdsf sdfsdfsdfsd",
      sender: "Friend",
    },
    {
      id: 5,
      text: "dfgfdgfdgfd",
      sender: "User",
    },
    {
      id: 6,
      text: "dfgfdgfdgfd",
      sender: "Friend",
    },
    {
      id: 7,
      text: "dfgfdgfdgfd",
      sender: "User",
    },
    {
      id: 8,
      text: "lkasjdfaskldjas lkadjlskajdsa askldjsk sdslks sdad",
    },
    {
      id: 9,
      text: "dfgfdgfdgfd",
      sender: "Friend",
    },
    {
      id: 10,
      text: "dfgfdgfdgfd",
      sender: "Friend",
    },
    {
      id: 11,
      text: "dfgfdgfdgfd sdfsdf vcbvc ytutyuty tyu tyuytu tyututy tu tyu tyuryer tyret ert ",
      sender: "User",
    },
  ];

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

  useEffect(() => {
    // Scroll to bottom on component mount
    scrollToBottomWrapper();
    scrollToBottom();
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [messages]);

  return (
    <div ref={chatWrapperRef} className="chatWrapper">
      {/*back button an dinfo goes here*/}
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
      <section className="w-full h-20 bg-[--primary-dark-50] p-4 flex  items-stretch justify-around gap-2 text-[--primary-text] font-bold">
        <CustomTooltip content="Add Files">
          <button className="rounded-full border-[3px] border-[--background-off-white] w-8 h-8 aspect-square items-center justify-center flex self-center">
            <Plus className="w-full h-full" size={20} weight="bold" />
          </button>
        </CustomTooltip>
        <input
          className="p-2 text-md text-[--primary-dark] font-bold w-full"
          type="text"
          placeholder="type..."
        />
        <CustomTooltip content="send">
          <button className="">
            <PaperPlaneTilt size={32} />
          </button>
        </CustomTooltip>
      </section>
    </div>
  );
}

export default Chat;
