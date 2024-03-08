// components/Navbar.js
import { handleFocusCurrentLocation } from "@/components/mapComponent/mapHelpers";
import Icon from "@/ui/Icon";
import Link from "next/link";

const Navbar = ({ mapRef, currentPosition, setCurrentPosition }) => {
  const withText = false;
  return (
    <nav className="bg-[--primary-dark] text-white p-4 flex absolute bottom-0 w-screen z-[999]">
      <Icon withText={withText} />
      <ul className="flex space-x-4 justify-center items-center w-full">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Chats</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          handleFocusCurrentLocation({
            mapRef,
            currentPosition,
            setCurrentPosition,
            currentPosition,
          });
        }}
        className=" w-10 h-10 justify-center items-center flex rounded-full e shadow-lg border border-black 
          transition text-3xl bg-white/20 duration-200 ml-auto md:ml-none z-50"
      >
        +
      </button>
    </nav>
  );
};

export default Navbar;
