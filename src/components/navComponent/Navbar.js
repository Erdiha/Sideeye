"use client";

import { handleFocusCurrentLocation } from "@/components/mapComponent/mapHelpers";
import { NavFocusButton } from "@/ui/Buttons";
import Icon from "@/ui/Icon";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ mapRef, currentPosition, setCurrentPosition }) => {
  const withText = false;
  const buttonText = "Focus";
  const [focusPressed, setFocusPressed] = useState(false);

  const focusTrigger = () => {
    handleFocusCurrentLocation({
      mapRef,
      currentPosition,
      setCurrentPosition,
      currentPosition,
    });
    setFocusPressed(!focusPressed);
  };

  return (
    <nav className="bg-[--primary-dark] text-white fixed bottom-0 z-[999] w-full flex justify-center items-center max-h-20 h-fit px-4 py-2">
      <div
        className="max-w-7xl flex  w-full xl:w-[80vw] 2xl:w-[70vw] 
      max-[1920]:w-[50vw] px-2 py-1  justify-center items-center"
      >
        <Icon withText={withText} />
        <ul className="flex space-x-4 justify-center items-center w-full">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/chats">Chats</Link>
          </li>
        </ul>

        <NavFocusButton
          text={buttonText}
          func={focusTrigger}
          setFocusPressed={setFocusPressed}
          focusPressed={focusPressed}
        />
      </div>
    </nav>
  );
};

export default Navbar;
