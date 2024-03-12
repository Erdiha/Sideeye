"use client";
import MapComponent from "@/components/mapComponent/Map";
import { handleFocusCurrentLocation } from "@/components/mapComponent/mapHelpers";
import BurgerMenu from "@/components/navComponent/BurgerMenu";
import Navbar from "@/components/navComponent/Navbar";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const Saloon = () => {
  const mapRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [markers, setMarkers] = useState([
    {
      id: 0,
      position: currentPosition,
      info: "My Location",
      imgSrc: "/sideeye1.png",
      text: "Erdi",
      stats: {
        height: "5'8",
        weight: "120",
        bust: "90",
        waist: "50",
        hip: "100",
        shoe: "9",
        hair: "black",
        eye: "brown",
        skin: "white",
        complexion: "fair",
        description: "A very nice guy",
      },
    },
    {
      id: 1,
      position: [34.1059344, -118.2312208],
      info: "Marker 1",
      imgSrc: "/sideeye4.png",
      text: "A",
      stats: {
        height: "6'8",
        weight: "190",
        bust: "90",
        waist: "50",
        hip: "100",
        shoe: "9",
        hair: "blonde",
        eye: "blue",
        skin: "white",
        complexion: "fair",
        description: "Yayyyy",
      },
    },
    {
      id: 2,
      position: [34.1069344, -118.2322208],
      info: "Marker 2",
      imgSrc: "/sideeye2.png",
      text: "B",
      stats: {
        height: "5'4",
        weight: "150",
        bust: "90",
        waist: "50",
        hip: "100",
        shoe: "9",
        hair: "brown",
        eye: "green",
        skin: "brown",
        complexion: "fair",
        description: "Yasss",
      },
    },
    {
      id: 3,
      position: [34.1079344, -118.2332208],
      info: "Marker 3",
      imgSrc: "/sideeye3.webp",
      text: "C",
      stats: {},
    },
    {
      id: 4,
      position: [34.1089344, -118.2342208],
      info: "Marker 4",
      imgSrc: "/sideeye5.png",
      text: "D",
      stats: {},
    },
  ]);

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
              markers={markers}
              setCurrentPosition={setCurrentPosition}
            />
          )}
        </div>
        {currentPosition && (
          <Navbar
            currentPosition={currentPosition}
            markers={markers}
            mapRef={mapRef}
            setCurrentPosition={setCurrentPosition}
          />
        )}
      </div>
    </>
  );
};

export default Saloon;
