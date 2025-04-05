import React, { useRef, useEffect } from "react";
import HouseImage from "@/assets/HouseImage.png";
import "../styles/HideScrollBar.css";

const images: string[] = Array.from({ length: 15 }, () => HouseImage);

export const GalleryRoulette: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      const scrollSpeedFactor = 2.5;
      el.scrollLeft += e.deltaY * scrollSpeedFactor;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="flex bg-white m-auto px-30 py-6 flex-col justify-center items-center">
      <div
        ref={scrollRef}
        className="overflow-x-scroll hide-scroll-bar pb-10 scroll-smooth w-full max-w-450 flex flex-col justify-center"
      >
        <div className="flex flex-nowrap w-max px-5 md:px-10 lg:px-20 mx-auto">
          {images.map((img, index) => (
            <div key={index} className="inline-block px-3">
              <div className="w-64 h-64 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
                <img
                  src={img}
                  alt={`Imagem ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
