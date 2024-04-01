import Icon from "@/ui/Icon";
import { motion } from "framer-motion";
import { Lamp } from "./Lamp";

export default function LampComponent() {
  return (
    <Lamp>
      <Icon withText={true} />

      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-start 
          text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        Your Business, <br /> Is yours!
      </motion.h1>
    </Lamp>
  );
}
