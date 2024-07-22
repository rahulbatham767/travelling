import React from "react";
import { ImTelegram } from "react-icons/im";
import CardIcon from "./CardIcon"; // Adjust the import path as necessary

const TravelServices = () => {
  return (
    <div className="flex flex-col items-center mt-4 justify-center gap-4">
      <h1 className="text-5xl">Top values for you</h1>
      <p className="text-gray-500">
        Try variety of benefits when using our services
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <CardIcon
          icon={<ImTelegram />}
          heading="Airport Pickup"
          para="We provide convenient and timely airport pickup services to ensure a smooth start to your journey."
        />
        <CardIcon
          icon={<ImTelegram />}
          heading="Easy Booking"
          para="Our booking process is simple and hassle-free, allowing you to focus on enjoying your trip."
        />
        <CardIcon
          icon={<ImTelegram />}
          heading="Best Tour Guide"
          para="Explore destinations with our experienced and knowledgeable tour guides who are here to enhance your travel experience."
        />
      </div>
    </div>
  );
};

export default TravelServices;
