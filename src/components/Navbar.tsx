"use client";
{
  /*
  > Create Menu Component to import here and reuse              (2)
  > Create Headlessui using react componnent for mobile menu    (2)
  > Add Theme changer
  ----------------------------------------------------------------------
  Component Status                                              (5.5)
  */
}

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Logo from "../../public/favicon.ico";

import { useState } from "react";
import TitleSlide from "../../public/img/AURORA_NEW_123.png";

export const Navbar = () => {
  const navigation = ["Home", "Pricing", "About", "Contact"];
  const [mmenu, setMmenu] = useState(false);
  function handleClick() {
    setMmenu(!mmenu);
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <Image src={TitleSlide} alt="Title Slide" />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={Logo} className="h-8" alt="Aurora Logo" width={44} />
          <span className="text-pink-500 hover:text-pink-700 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AURORA
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/Contact"
            type="button"
            className="text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-Hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-Linecap="round"
                stroke-Linejoin="round"
                stroke-Width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((menu, index) => (
              <li
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                key={index}
              >
                <Link
                  className="inline-block px-auto py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-pink-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 dark:hover:text-indigo-500"
                  href={menu === "Home" ? "/" : menu}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
