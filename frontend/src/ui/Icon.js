<<<<<<< Updated upstream
import { motion } from "framer-motion";
import Image from "next/image";

const Icon = () => {
  return (
    <div className=" w-full h-full flex justify-evenly items-center mt-20 md:mt-0 ">
      <section className="items-center justify-center flex  w-40 h-40  ">
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 20,
            damping: 10,
          }}
          className=" w-10 h-10 flex justify-center items-center"
        >
          <span className="text-[--primary-text] font-bold text-2xl  z-50 text-shadow-xl">
            SID
          </span>
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
          animate={{ x: 0 }}
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
          <span className="text-[--primary-text] font-bold text-2xl z-50 text-shadow-xl">
            YE
          </span>
        </motion.div>
      </section>
=======
const Icon = () => {
  return (
    <div className=" items-center flex w-fit   ">
      <span className="  flex border-white  ">sideEYE</span>
      {/* <Image
        style={{
          borderRadius: "20%",
          display: "flex",
          backgroundColor: "transparent",
        }}
        height={70}
        width={70}
        src="/sideeye2.png"
      ></Image> */}
>>>>>>> Stashed changes
    </div>
  );
};

export default Icon;
