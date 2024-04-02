import { X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { CloseButton } from "react-toastify";
import "./modalStyle.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          damping: 300,
          stiffness: 500,
          ease: "easeOut",
          type: "tween",
        }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        {CloseButton && (
          <button
            className={` modal-close-btn md:hover:scale-[1.1] transition-all duration-300 ease-in-out md:hover:bg-[var(--vintage-brown)] `}
            onClick={onClose}
          >
            <X
              color="white"
              size={24}
              weight="bold"
              className="p-[3px] font-extrabold"
            />
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
