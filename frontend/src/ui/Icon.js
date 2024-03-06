import { motion } from "framer-motion";
import Image from "next/image";

const Icon = ({ withText }) => {
  const styleWithOutText = { width: "fit", height: "fit", marginTop: "0" };
  const styleWithText = { width: "full", height: "full", marginTop: "5rem" };
  return (
    <div
      style={withText ? styleWithText : styleWithOutText}
      className=" flex justify-evenly items-center  md:mt-0 "
    >
      <section
        className={`items-center justify-center flex ${
          withText ? "w-40 h-40" : ""
        } `}
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
          className=" w-10 h-10 flex justify-center items-center"
        >
          {withText && (
            <span className="text-[--primary-text] font-bold text-2xl  z-50 text-shadow-xl">
              SID
            </span>
          )}
          <Image
            style={{
              borderBottomLeftRadius: "50%",
              borderTopRightRadius: "50%",
              borderBottomRightRadius: "50%",
              display: "flex",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover",
              height: "100%",
              width: "100%",
              position: "relative",
              // filter: "drop-shadow(0rem 0rem 0.1rem #fff)",
              transition: "all 0.3s ease-in-out",

              // border: "1px solid #fff",
            }}
            className="bg-[--vintage-orange-50]"
            height={80}
            width={100}
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
          className=" w-10 h-10  flex  justify-center items-center"
        >
          <Image
            style={{
              display: "flex",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              objectFit: "cover",
              height: "100%",
              width: "100%",
              borderBottomLeftRadius: "50%",
              borderTopRightRadius: "50%",
              borderTopLeftRadius: "50%",
              borderTop: "50%",
              position: "relative",

              // filter: "drop-shadow(0rem 0rem 0.1rem #fff)",
              transition: "all 0.3s ease-in-out",

              // border: "1px solid #fff",
            }}
            className="bg-[--vintage-orange-50]"
            height={100}
            width={100}
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
