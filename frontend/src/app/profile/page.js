"use client";

import { ArrowLeft, Gear, UserCircleGear } from "@phosphor-icons/react";
import Link from "next/link";

function page() {
  const images = ["a"];
  return (
    <div className="max-w-screen max-h-screen h-screen flex flex-col z-[999] justify-center items-center bg-gradient-to-b  from-[--primary-dark] to-black">
      <div className="w-[50rem] max-w-[50dvw] h-[100%] relative flex flex-col">
        <section className="w-full h-[calc(100%-4rem)]  bg-gray-300 flex flex-col">
          <Link
            className=" md:hover:scale-110 transition-all ease-in-out duration-500   z-[9999] absolute bg-[--primary-dark] rounded-full p-2 text-[--primary-text] w-10 h-10 top-5 left-5 text-center"
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

            <section className="w-full  flex absolute inset-0 bg-gradient-to-t from-black to-transparent justify-evenly items-center p-4 gap-4">
              <div className="w-[50%]  flex self-end justify-start  items-center absolute bottom-5 gap-4 text-sm">
                <button className="md:hover:scale-110 transition-all ease-in-out duration-500  bg-[--primary-dark] w-1/2 p-2 rounded flex justify-between items-center font-bold  text-gray-100">
                  Edit Profile <UserCircleGear size={24} />
                </button>
                <button className="md:hover:scale-110 transition-all ease-in-out duration-500  bg-[--primary-dark] w-1/2 p-2 rounded flex justify-between items-center font-bold text-gray-100 ">
                  Edit Account <Gear size={24} />
                </button>
              </div>
              <div className="w-[5rem] rounded-md  bg-[--primary-dark] flex flex-col gap-1 p-1 absolute right-5 top-5 ">
                <img
                  className="w-full scale-[1.15] rounded-md md:hover:scale-110 transition-all ease-in-out duration-500   aspect-square bg-slate-100 object-fill border-4 border-green-400"
                  src="/me.jpg"
                  alt=""
                />
                <img
                  className="w-full md:hover:scale-110 transition-all ease-in-out duration-500 p-1  aspect-square bg-slate-100 object-fill"
                  src="/me.jpg"
                  alt=""
                />
                <img
                  className="w-full p-1 md:hover:scale-110 transition-all ease-in-out duration-500 border aspect-square bg-slate-100 object-fill"
                  src="/me.jpg"
                  alt=""
                />{" "}
                <img
                  className="w-full p-1  md:hover:scale-110 transition-all ease-in-out duration-500 aspect-square bg-slate-100 object-fill"
                  src="/me.jpg"
                  alt=""
                />
                <button className=" md:hover:scale-110 transition-all ease-in-out duration-500  bg-white self-center rounded-full shadow-xl absolute z-50 justify-center flex items-center right-0 bottom-0 border-2 border-[--primary-dark] ">
                  <Gear weight="bold" size={24} />
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
