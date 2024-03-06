"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex max-h-screen h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <motion.div
        initial={{ scale: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          damping: 3,
          stiffness: 40,
        }}
        animate={{ scale: 1, zIndex: "9999" }}
      >
        {/* <Image
          style={{
            backgroundColor: "var(--background-off-white)",
            zIndex: "9999",
            borderRadius: "20%",
            aspectRatio: 1,
            backgroundRepeat: "no-repeat",
            position: "relative",
            filter: "drop-shadow(0px 0px 1px #ffff)",
            transition: "all 0.5s ease-in-out",
            objectPosition: "center",
            objectFit: "cover",
            border: "var(--vintage-brown) 1px solid",
            translate: "0% 150%",
            transform: "all 1s linear ease",
          }}
          width="70"
          height="70"
          src="/sideeye5.png"
        /> */}
      </motion.div>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
        <motion.p
          initial={{ opacity: 0, scale: 10 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="  border-white bottom-[-35%] absolute self-start   
          bg-gradient-to-br from-slate-300 to-slate-500 
           bg-clip-text  text-sm font-medium tracking-tight 
           text-transparent md:text-sm text-start flex italic"
        >
          Take Control of Your Privacy. <br />
          Your Data, Your Rules.
        </motion.p>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, bottom: "10%" }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="inline-flex h-12 animate-shimmer items-center 
        justify-center rounded-md border border-slate-500 
        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
        bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors 
        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
        focus:ring-offset-slate-50  absolute bottom-0"
      >
        <Link href="/login">Start Here</Link>
      </motion.button>
    </div>
  );
};
