import React from "react";

import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";
import Image from "next/image";

import priceOneImg from "../../public/img/basic.png";
import priceTwoImg from "../../public/img/business.png";
import priceThreeImg from "../../public/img/Advanced.png";

export default function Pricing() {
  return (
    <div>
      <SectionTitle preTitle="Packages" title="Personal Pricing and Plans">
        All plans include personal tax calculation and filing.
      </SectionTitle>

      <div className=" m-5  container flex grid-cols-3 gap-8">
        <div className=" ml-5 max-w-1/3 col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" mb-2 text-center p-2  text-5xl font-bold  text-gray-900 dark:text-white">
            Basic
          </div>
          <Link href="/About">
            <Image className="rounded-t-lg" src={priceOneImg} alt="" />
          </Link>
          <div className="m-1 text-center text-4xl font-bold  text-gray-900 dark:text-white">
            R 210 p.m.
          </div>
          <div className="mb-2 text-center text-1xl font-bold  text-gray-900 dark:text-white">
            (ex. VAT) per month
          </div>
          <Link
            href="/Contact"
            className="p-2 m-5 flex text-center rounded-md  text-white bg-indigo-600 hover:bg-indigo-500 "
          >
            Contact Us
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
          <div className=" p-2  items-center text-5xl font-bold  text-gray-900 dark:text-white">
            Business
          </div>
          <Link href="/About">
            <Image className="rounded-t-lg" src={priceOneImg} alt="" />
          </Link>

          <div className="mb-1 item-center text-4xl font-bold  text-gray-900 dark:text-white">
            R 417 p.m.
          </div>
          <div className="mb-2 text-1xl font-bold  text-gray-900 dark:text-white">
            (ex. VAT) per month
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
              <li>Local or Foreign Salary</li>
              <li>Medical aid</li>
              <li>Retirement annuity / pension</li>
              <li>IT3B & IT3C statements</li>
              <li>Rental Income less than 5 properties</li>
              <li>Home office deductions</li>
              <li>Business income less than R 250 000 p.a.</li>
            </ul>
          </div>
        </div>
        <div className="max-w-1/3 col-span-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" p-2  items-center text-5xl font-bold  text-gray-900 dark:text-white">
            Advanced
          </div>
          <Link href="/About">
            <Image className="rounded-t-lg" src={priceOneImg} alt="" />
          </Link>

          <div className="mb-1 item-center text-4xl font-bold  text-gray-900 dark:text-white">
            R 833 p.m.
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
              <li>Local & Foreign based salaries</li>
              <li>Medical aid</li>
              <li>Retirement annuity / pension</li>
              <li>International interest and investments</li>
              <li>Rental income more than 5 properties</li>
              <li>Home office deductions</li>
              <li>Business income more than R 250 000 p.a.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
