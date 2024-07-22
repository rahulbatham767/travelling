import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-16 mt-7">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          About us
        </Link>
        <Link href="/" className="link link-hover">
          Contact
        </Link>
        <Link href="/" className="link link-hover">
          Jobs
        </Link>
        <Link href="/" className="link link-hover">
          Press kit
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="/">
            <ImTwitter fontSize={"2rem"} />
          </Link>
          <Link href="/">
            <ImYoutube fontSize={"2rem"} />
          </Link>
          <Link href="/">
            <ImFacebook fontSize={"2rem"} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          FamilyTravels
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
