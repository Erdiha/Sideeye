"use client";

import { ArrowLeft, UserCircleGear } from "@phosphor-icons/react";
import AccountSettingsForm from "./AccountsettignsForm";

export const RadioButtons = () => {
  return (
    <div>
      <input type="radio" name="radio" value="Option 1" /> Option 1<br />
      <input type="radio" name="radio" value="Option 2" /> Option 2<br />
      <input type="radio" name="radio" value="Option 3" /> Option 3<br />
    </div>
  );
};

function Page() {
  return (
    <div className="w-screen h-screen bg-[--primary-dark] flex justify-evenly items-center flex-col p-2">
      <div className="text-white text-2xl font-bold  w-[90vw] md:w-[50dvw] 2xl:w-[40dvw] h-[5rem] text-center  flex border-b-[--primary-dark-50] border-b-2  justify-between gap-2 items-center  pl-2 mb-1">
        <ArrowLeft
          onClick={() => window?.history?.back()}
          size={32}
          weight="bold"
        />
        <span className="flex w-full text-center  items-center gap-4 justify-center">
          <UserCircleGear size={28} weight="fill" /> Account Settings
        </span>
      </div>
      <hr />
      <AccountSettingsForm />
    </div>
  );
}

export default Page;
