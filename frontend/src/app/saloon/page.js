"use client";
import MapComponent from "@/components/map/MapComponent";
import BurgerMenu from "@/components/navigation/BurgerMenu";
import Navbar from "@/components/navigation/Navbar";
import { useRef } from "react";

const Page = () => {
  const mapRef = useRef(null);
  return (
    <div className="h-screen min-w-screen flex relative">
      <BurgerMenu />
      <MapComponent mapRef={mapRef} />
      <Navbar mapRef={mapRef} />
    </div>
  );
};

export default Page;
