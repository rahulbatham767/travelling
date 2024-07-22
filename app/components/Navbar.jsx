"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/userSlice";

const Navbar = () => {
  const { loggedIn } = useSelector((state) => state.user.userSlice);

  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logout());
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1  w-52 p-2 shadow"
          >
            <li>
              <Link href={"/Tour"}>Our Tours</Link>
            </li>
            <li>
              <Link href={"/Tour"}>About Us </Link>
            </li>
            <li>
              <Link href={"/booking"}>Booking</Link>
            </li>
            <li>
              <Link href={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href={"/"}>
          FamilyTravel
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/Tour"}>Our Tours</Link>
          </li>
          <li>
            <Link href={"/Tour"}>About Us </Link>
          </li>
          <li>
            <Link href={"/booking"}>Booking</Link>
          </li>
          <li>
            <Link href={"/faq"}>FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loggedIn ? (
          <button className="btn mr-2 " onClick={handleLogout}>
            LogOut
          </button>
        ) : (
          <div>
            {" "}
            <Link className="btn mr-2 " href={"/register"}>
              Register
            </Link>
            <Link className="btn" href={"/login"}>
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
