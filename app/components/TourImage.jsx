import React from "react";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const TourImage = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {data.map((item, id) => (
        <div
          className="card card-compact bg-base-100 w-96 shadow-xl flex flex-col justify-center items-center mt-5"
          key={id}
        >
          <figure
            style={{ width: "100%", height: "300px", position: "relative" }}
          >
            <Image
              src={item.url}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
            <button className="btn absolute top-0 right-0">
              5.0
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  style={{ fontSize: "1rem" }}
                />
              </div>
            </button>
          </figure>
          <div className="card-body relative">
            <h2 className="card-title">{item.title}</h2>
            <div className="flex justify-between items-center">
              <p>{item.para}</p>
              <button className="absolute right-4 bottom-4">
                <ArrowRightCircle />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourImage;
