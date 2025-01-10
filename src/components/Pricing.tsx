import React from "react";

import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";
import Image from "next/image";

import memOneImg from "../../public/img/the-sun.jpg";

export default function Pricing() {
  return (
    <div>
      <SectionTitle preTitle="Packages" title="Personal Pricing and Plans">
        All plans include personal tax calculation and filing.
      </SectionTitle>

      <div className="m-5 items-center  justify-center container flex grid-cols-3 gap-8">
        <div className="mx-auto  flex-col col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" p-2  items-center text-5xl font-bold  text-gray-900 dark:text-white">
            Basic
          </div>
          <Link href="/About">
            <Image className="rounded-t-lg" src={memOneImg} alt="" />
          </Link>

          <div className="mb-1 item-center text-4xl font-bold  text-gray-900 dark:text-white">
            R 2 000
          </div>
          <div className="mb-2 text-1xl font-bold  text-gray-900 dark:text-white">
            (ex. VAT) per tax year
          </div>
          <Link
            href="/Contact"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <div className="mb-2 text-1xl font-bold  text-gray-900 dark:text-white">
            <ul>
              <li>SARS verification</li>
              <li>Admin penalty remittance application</li>
              <li>Tax return calculation & filing</li>
              <li>Local salary</li>
              <li>Medical aid</li>
              <li>Retirement annuity / pension</li>
            </ul>
          </div>
        </div>
        <div className="max-w-1/3 col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/About">
            <Image className="rounded-t-lg" src={memOneImg} alt="" />
          </Link>
          <div className="p-5">
            <Link href="/About">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Alison Deysel
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              CEO
            </p>
            <Link
              href="/Contact"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="max-w-1/3 col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/About">
            <Image className="rounded-t-lg" src={memOneImg} alt="" />
          </Link>
          <div className="p-5">
            <Link href="/About">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Samatha Koch
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              COO
            </p>
            <Link
              href="/Contact"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
