// components/Navbar.js
import { handleFocusCurrentLocation } from "@/components/map/mapHelpers";
import Icon from "@/ui/Icon";
import Link from "next/link";

const Navbar = ({ mapRef }) => {
  const withText = false;
  return (
    <nav className="bg-[--primary-dark] text-white p-4 flex absolute bottom-0 w-screen">
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
          handleFocusCurrentLocation({ mapRef });
        }}
        className=" rounded-md border border-black 
          transition duration-200 ml-auto md:ml-none border-b-2 border-b-white"
      >
        Focus
      </button>
    </nav>
  );
};

export default Navbar;
