"use client";
import { handleFocusCurrentLocation } from "@/components/mapComponent/mapHelpers";
import BurgerMenu from "@/components/navComponent/BurgerMenu";
import Navbar from "@/components/navComponent/Navbar";
import { dummyProfiles } from "@/data/dummyData";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
const MapComponent = dynamic(() => import("@/components/mapComponent/Map"), {
  ssr: false,
});

const Saloon = () => {
  const mapRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [markers, setMarkers] = useState(dummyProfiles);

  useEffect(() => {
    if (!currentPosition) {
      handleFocusCurrentLocation({
        mapRef,
        setCurrentPosition,
        currentPosition,
      });
    }
  }, []);

  useEffect(() => {
    if (currentPosition) {
      setMarkers((prevMarkers) =>
        prevMarkers.map((marker) =>
          marker.id === 0 ? { ...marker, position: currentPosition } : marker
        )
      );
    }
  }, [currentPosition]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <div className="flex flex-col md:flex-row max-h-screen max-w-screen relative overflow-hidden">
        <BurgerMenu />
        <div className="flex-1">
          {currentPosition && (
            <MapComponent
              mapRef={mapRef}
              currentPosition={currentPosition}
              markers={dummyProfiles}
              setCurrentPosition={setCurrentPosition}
            />
          )}
        </div>
        {currentPosition && (
          <Navbar
            currentPosition={currentPosition}
            markers={dummyProfiles}
            mapRef={mapRef}
            setCurrentPosition={setCurrentPosition}
          />
        )}
      </div>
    </>
  );
};

export default Saloon;
