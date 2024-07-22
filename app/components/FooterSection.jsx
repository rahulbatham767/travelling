import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <div className="flex flex-col justify-center items-center relative mt-12  ">
      <div className=" rounded-full">
        <Image
          src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={"900"}
          height={"400"}
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
      <div className="absolute bottom-1/2-6 items-center justify-center flex flex-col">
        <h1 className="text-5xl mb-8 text-white">Let's Get To Know</h1>
        <button className="btn">
          <a href="tel:750-988-8936">Call Now</a>
        </button>
      </div>
    </div>
  );
};

export default FooterSection;
