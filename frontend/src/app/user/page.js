"use client";

import {
  ArrowLeft,
  EyeSlash,
  Gear,
  Swap,
  TrashSimple,
  UserCircleGear,
  UserRectangle,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ImageUI from "@/ui/ImageUI";

function Page() {
  const images = ["/me.jpg", "", "", ""];
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const sizes = 24;
  const imageSettings = [
    {
      label: "Change Image",
      icon: <Swap size={sizes} fontWeight="bold" />,
      onClick: () => alert("Change Profile Picture clicked"),
    },

    {
      label: "Make Profile",
      icon: <UserRectangle size={sizes} fontWeight="bold" />,
      onClick: () => alert("Make Profile Picture clicked"),
    },
    {
      label: "Hide Image ",
      icon: <EyeSlash size={sizes} />,
      onClick: () => alert("Hide Profile Picture clicked"),
    },
    {
      label: "Delete Image",
      icon: <TrashSimple size={sizes} color="red" fontWeight="bold" />,
      onClick: () => alert("Delete Profile Picture clicked"),
    },
  ];

  const imageSection = () => {
    return images.map((item, index) => (
      <div
        key={index}
        className="relative"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(-1)}
      >
        <img
          style={{
            border: index === 0 ? "solid 1px var(--primary-dark)" : "",
            scale: index === 0 ? "1.05" : "0.9",
            translate: hoveredIndex === index ? "-10px" : "",
            borderRadius: hoveredIndex === index ? "0% 50% 50% 0%" : "",
          }}
          className="w-full scale-[1.05] rounded-sm md:hover:scale-110 transition-all ease-in-out duration-500 aspect-square bg-slate-100 object-fill"
          src={item ? images[index] : ""}
          alt=""
        />
        {hoveredIndex === index && (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 30, damping: 2 }}
            className="absolute top-0 right-20 w-full min-h-full h-80 bg-[--primary-dark] flex justify-center items-center text-white text-[10px]  rounded-b-full rounded-tl-full flex-col p-2 "
          >
            {imageSettings.map((item1, index) => (
              <button
                key={index}
                style={{
                  borderBottom:
                    index < imageSettings.length - 1
                      ? "3px solid var(--primary-dark-50)"
                      : "",
                }}
                className="flex justify-center items-center w-full h-full rounded-sm text-[8px]"
                onClick={item.onClick}
              >
                {item.image ? (
                  <>
                    {item.label}
                    {item.icon}
                  </>
                ) : (
                  <div className="flex justify-center items-center bg-gray-300 w-full h-full">
                    <span className="text-gray-600 text-2xl">+</span>
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    ));
  };

  return (
    <div className="max-w-screen max-h-screen h-screen flex flex-col z-[999] justify-center items-center bg-gradient-to-b  from-[--primary-dark] to-black">
      <div className="md:w-[50rem] md:max-w-[50dvw] h-[100%] relative flex flex-col">
        <section className="w-full h-[100%]  bg-gray-300 flex flex-col">
          <Link
            className="md:hover:scale-110 transition-all ease-in-out duration-500 z-[9999] absolute bg-[--primary-dark] rounded-full p-2 text-[--primary-text] w-10 h-10 top-5 left-5 text-center"
            href="/saloon"
          >
            <ArrowLeft size={24} />
          </Link>
          <div className="relative w-full h-full">
            <img
              src="/me.jpg"
              alt="image"
              className="w-full h-full object-cover"
            />

            <section className="w-full flex absolute inset-0 bg-gradient-to-t from-black to-transparent justify-evenly items-center p-4 gap-4">
              <div className="2xl:w-[50%] md:w-[80%] lg:w-[70%] w-full p-4 flex self-end justify-start items-center absolute bottom-5 gap-4 text-sm">
                <button className="md:hover:scale-110 transition-all ease-in-out duration-500 bg-[--primary-dark] md:w-1/2 p-2 rounded flex justify-between items-center font-bold text-gray-100 w-full">
                  Edit Profile <UserCircleGear size={24} />
                </button>
                <Link
                  href="/account"
                  className="md:hover:scale-110 transition-all ease-in-out duration-500 bg-[--primary-dark] md:w-1/2 p-2 rounded flex justify-between items-center font-bold text-gray-100 w-full"
                >
                  Edit Account <Gear size={24} />
                </Link>
              </div>
              <div className="w-[5rem] rounded-full bg-gradient-to-t from-[--primary-dark] to-transparent flex flex-col gap-1 p-1 absolute right-5 top-5 ">
                {imageSection()}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
