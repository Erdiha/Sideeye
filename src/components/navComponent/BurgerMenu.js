"use client";
import SettingsShape from "@/components/userComponent/popup/PopupMenu";
import { motion } from "framer-motion";
import { useState } from "react";

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-h-screen flex overflow-hidden">
      <motion.div
        onClick={() => setOpenMenu(!openMenu)}
        className={`bg-[--primary-dark] absolute cursor-pointer flex flex-col text-black 
    border-[#265073] p-[0.6rem] h-10 w-10 z-50 justify-evenly gap-1 items-center right-6 md:right-5 top-5 
    ${
      openMenu
        ? "md:rounded-[50px_50px_50px_0px] rounded-[50px_50px_0px_50px]"
        : "rounded-full"
    } sm:rounded-none`}
      >
        <motion.span
          animate={
            openMenu
              ? { rotate: 45, translateY: "0.4rem" }
              : { rotate: 0, translateY: 0 }
          }
          className="flex w-full bg-white "
          style={{ height: openMenu ? "25%" : "33.3%" }}
        ></motion.span>
        {!openMenu && <span className="block w-full h-1/3 bg-white "></span>}
        <motion.span
          animate={
            openMenu
              ? { rotate: -45, translateY: "-0.3rem" }
              : { rotate: 0, translateY: 0 }
          }
          className="block w-full bg-white "
          style={{ height: openMenu ? "25%" : "33.3%" }}
        ></motion.span>
      </motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={openMenu ? { x: 0 } : { x: "200%" }}
        transition={{ duration: 0.5, ease: "easeInOut", damping: 3 }}
        className="popupCard"
      >
        <SettingsShape openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </motion.div>
    </div>
  );
};

export default BurgerMenu;
