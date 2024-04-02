import { Crosshair } from "@phosphor-icons/react";
import { motion } from "framer-motion";
export const NavFocusButton = ({
  text,
  func,
  setFocusPressed,
  focusPressed,
}) => {
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.2, backgroundColor: "#dc2626" }}
        transition={{ duration: 0.3, type: "tween" }}
        animate={{ scale: focusPressed ? 0.5 : 1 }}
        onClick={() => {
          func();
          setFocusPressed((prev) => !prev);
        }}
        className={`aspect-square justify-center items-center shadow-lg w-8 h-8 rounded-full transition border-[1px] duration-200 md:ml-none z-50 flex relative`}
      >
        <div className="tooltip">
          <span className="tooltiptext text-sm">Center Map</span>
        </div>

        <Crosshair size={24} color={"white"} weight="fill" />
      </motion.button>
    </>
  );
};

export const ModalButton = ({
  text,
  size,
  deletePressed,
  setDeletePressed,
  func,
  icon,
  closeButton,
}) => {
  return (
    <motion.button
      onClick={() => {
        func();
      }}
      whileHover={{ scale: 1.1, borderColor: "#f87171" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="justify-center gap-2 items-center shadow-lg w-fit h-fit mt-5 rounded border-[1px] md:ml-none z-50 flex relative px-2 py-1 
      bg-[var(--primary-dark)] 
      text-[var(--primary-text)]"
      style={{ transformOrigin: "center" }}
    >
      {text}
      {icon}
    </motion.button>
  );
};
