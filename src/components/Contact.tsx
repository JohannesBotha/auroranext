"use client";
import React, { FormEvent } from "react";

export default function Contact() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "8461831b-6c08-4586-8302-dd960d36aac6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <div className="flex mt-10">
      <div className=" flexmx-auto rounded-2xl items-center w-2/3  border-8 border-gray-600 bg-gray-600 shadow-3xl  ">
        <div className="flex flex-col   p-5 bg-gray-600">
          <h3 className="mb-6 text-5xl text-white">How can we help?</h3>
          <p className="text-3xl text-white opacity-50">
            We usually respond within 2 days.
          </p>
        </div>
        <form
          className="flex-grow h-full p-6 overflow-auto bg-gray-600 "
          onSubmit={handleSubmit}
        >
          {/*Name*/}
          <div className="mb-4">
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   "
            />
          </div>

          {/*Email*/}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              className="w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring  "
            />
          </div>

          {/*Message*/}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Your Message
            </label>

            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   "
              required
            ></textarea>
          </div>
        </form>

        <div className="mb-3">
          <button
            className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
