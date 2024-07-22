"use client";
import Image from "next/image";
import { useState } from "react";

export function TravelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1703098916907-ba5c822fdc0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1703098916487-ab6668147d50?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel w-full h-[500px]">
      {images.map((item, index) => (
        <div
          key={item.id}
          className={`carousel-item relative w-full  justify-center ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <Image
            src={item.url}
            alt={`slide ${item.id}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full z-4"
          />

          <div className="absolute left-5 right-5 top-1/4 flex-translate-y-1/2 transform flex-start ">
            <div>
              <div>
                <h1 className="text-6xl z-10 text-white">
                  Explores The sight <br /> of the India
                </h1>
                <button className="btn mb-12 mt-12">Book Now</button>
              </div>
              <div>
                <button className="btn btn-circle" onClick={prevIndex}>
                  ❮
                </button>

                <button className="btn btn-circle" onClick={nextIndex}>
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
