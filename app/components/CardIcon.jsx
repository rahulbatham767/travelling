import React from "react";

const CardIcon = ({ icon, heading, para }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white  rounded-lg w-64 m-6">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold mb-1">{heading}</h3>
      <p className="text-center text-sm text-gray-500">{para}</p>
    </div>
  );
};

export default CardIcon;
