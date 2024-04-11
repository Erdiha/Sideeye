import { motion } from "framer-motion";
import Image from "next/image";

const Icon = ({ withText }) => {
  const styleWithOutText = { width: "100%", height: "100%", marginTop: "0" };
  const styleWithText = { width: "100%", height: "100%", marginTop: "5rem" };

  return (
    <div
      style={withText ? styleWithText : styleWithOutText}
      className="flex justify-evenly items-center w-10 h-10 md:mt-0"
    >
      <section
        className={`items-center justify-center flex aspect-square h-fit p-0 text-[--primary-text] ${
          withText ? "w-40 h-20" : "w-20"
        }`}
      >
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: withText ? 0 : 20 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 20,
            damping: 10,
          }}
          className="w-10 h-10 flex justify-center items-center"
        >
          {withText && (
            <span className="text-[--primary-text] font-bold text-2xl z-50 text-shadow-xl">
              SID
            </span>
          )}
          <Image
            height={100}
            width={100}
            className="bg-[--vintage-teal-50] rounded-t-full rounded-br-full"
            alt="icon image"
            src="/e.png"
          />
        </motion.div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: withText ? 0 : -20 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 20,
            damping: 10,
          }}
          className="w-10 h-10 flex justify-center items-center"
        >
          <Image
            className="bg-[--vintage-teal-50] rounded-b-full rounded-tl-full"
            height={100}
            width={100}
            alt="icon image"
            src="/e.png"
          />
          {withText && (
            <span className="text-[--primary-text] font-bold text-2xl z-50 text-shadow-xl">
              YE
            </span>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Icon;
