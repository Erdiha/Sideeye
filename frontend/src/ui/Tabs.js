import Thumbnail from "@/components/userComponent/profile/Thumbnail";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  setShowChat,
  showChat,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
    setShowChat(true); // Show the chat view on mobile when a tab is clicked
  };
  const router = useRouter();
  console.log("tabs", tabs, active);
  const goBackToList = () => {
    router.push("/saloon");
  };

  return (
    <div
      className={cn("flex flex-col md:flex-row overflow-hidden w-[100dvw] ")}
    >
      <div
        className={cn(
          "flex flex-col w-full h-full gap-4 md:w-64 p-5", // Adjust width for desktop
          "overflow-hidden border border-[--primary-dark] " // Prevent overflow
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "relative gap-3 p-2 justify-center items-center flex w-full h-full ",
              tabClassName
            )}
          >
            <div className="">
              <Thumbnail imgSrc="/me.jpg" type="chat" />
            </div>
            <div
              className=" flex justify-evenly items-center relative w-full h-full gap-4 "
              onClick={() => {
                // Handle click event if needed
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 ",
                    activeTabClassName
                  )}
                />
              )}
              <span className="relative  text-black dark:text-white flex justify-center items-center w-full">
                {tab.title}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className={cn("w-full h-full ")}>
        {/* Show chat content on larger screens and hide it on mobile when the chat list is visible */}
        {showChat ? (
          <FadeInDiv
            tabs={tabs}
            active={active}
            showChat={showChat}
            goBackToList={goBackToList}
            className={contentClassName}
          />
        ) : (
          <div className="  flex items-center justify-center h-full w-full">
            <span className="text-gray-500">Select a chat to start</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  showChat,
  goBackToList,
}) => {
  return (
    <div className={cn(" w-full h-full")}>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          initial={{ opacity: 0 }}
          animate={{ opacity: active.value === tab.value ? 1 : 0 }}
          className={cn(
            "w-screen h-full  flex items-center justify-center",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
