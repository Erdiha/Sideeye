import { motion } from "framer-motion";
import { useState } from "react";
const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-h-screen flex overflow-y-hidden overflow-hidden">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`bg-[--primary-dark] absolute cursor-pointer  text-black p-2 flex h-10  w-10 z-50  justify-evenly gap-1 items-center flex-col right-5 top-5`}
      >
        <motion.span
          animate={
            openMenu
              ? { rotate: 45, translateY: "0.5rem" }
              : { rotate: 0, translateY: 0 }
          }
          className="w-full bg-[--primary-text] rounded-sm"
          style={{ height: openMenu ? "25%" : "33.3%" }}
        ></motion.span>
        {!openMenu && (
          <span className="w-full h-1/3 bg-[--primary-text] rounded-sm"></span>
        )}
        <motion.span
          animate={
            openMenu
              ? { rotate: -45, translateY: "-0.4rem" }
              : { rotate: 0, translateY: 0 }
          }
          className="w-full bg-[--primary-text] rounded-sm"
          style={{ height: openMenu ? "25%" : "33.3%" }}
        ></motion.span>
      </div>

      <motion.div
        initial={{ x: "200%" }}
        animate={openMenu ? { x: 0 } : { x: "200%" }}
        transition={{ duration: 0.5, ease: "easeInOut", damping: 3 }}
        className="bg-[--primary-dark] absolute top-0 left-0 h-screen w-[100%] z-40"
      ></motion.div>
    </div>
  );
};

export default BurgerMenu;

//   ${openMenu
//     ? "rounded-full border-b-2 bottom-20 left-1/2 transform -translate-x-1/2 "
//     : "rounded top-5 right-5"
// }
