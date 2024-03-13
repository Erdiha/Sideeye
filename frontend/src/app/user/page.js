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

function Page() {
  const images = ["/me.jpg", "/e.png", "/sideeye1.png", "sideeye5.png"];
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const sizes = 20;
  const imageSettings = [
    {
      label: "Change Image",
      icon: <Swap size={sizes} />,
      onClick: () => alert("Change Profile Picture clicked"),
    },

    {
      label: "Make Profile",
      icon: <UserRectangle size={sizes} />,
      onClick: () => alert("Make Profile Picture clicked"),
    },
    {
      label: "Hide Image ",
      icon: <EyeSlash size={sizes} />,
      onClick: () => alert("Hide Profile Picture clicked"),
    },
    {
      label: "Delete Image",
      icon: <TrashSimple size={sizes} />,
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
          src={images[index]}
          alt=""
        />
        {hoveredIndex === index && (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 30, damping: 2 }}
            className="absolute top-0 right-20 w-full min-h-full h-80 bg-[--primary-dark] flex justify-center items-center text-white text-[10px]  rounded-b-full rounded-tl-full flex-col p-2 "
          >
            {imageSettings.map((item, index) => (
              <button
                key={index}
                style={{
                  borderBottom:
                    index < imageSettings.length - 1
                      ? "3px solid var(--primary-dark-50)"
                      : "",
                }}
                className="flex justify-evenly items-center gap-2 w-full h-full rounded-sm"
                onClick={item.onClick}
              >
                {item.label}
                {item.icon}
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
        <section className="w-full h-[calc(100%-4rem)]  bg-gray-300 flex flex-col">
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
                <button className="md:hover:scale-110 transition-all ease-in-out duration-500 bg-[--primary-dark] md:w-1/2 p-2 rounded flex justify-between items-center font-bold text-gray-100 w-full">
                  Edit Account <Gear size={24} />
                </button>
              </div>
              <div className="w-[5rem] rounded-full bg-gradient-to-t from-[--primary-dark] to-transparent flex flex-col gap-1 p-1 absolute right-5 top-5 ">
                {imageSection()}
                {/* <button className="md:hover:scale-110 transition-all ease-in-out duration-500 bg-white self-center rounded-full shadow-xl absolute z-50 justify-center flex items-center -right-3 -bottom-3 border-2 border-[--primary-dark]">
                  <Gear weight="bold" size={24} />
                </button> */}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
