"use client";

{
  /*
  > Create Component for clients to iterate through
  
  */
}

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/Jesica_Miller.png";
import userTwoImg from "../../public/img/Mark_Roberts.png";
import userThreeImg from "../../public/img/Susan_Taylor.png";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              &quot;Aurora Financial Services has been a game-changer for our
              business. Their expertise in tax consulting saved us from costly
              errors, and their team is always professional and reliable.&quot;
            </p>

            <Avatar
              image={userOneImg}
              name="Jesica Miller"
              title="CEO of GreenWave Solutions"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              &quot;The Aurora team is exceptional! They handled our bookkeeping
              and provisional tax returns seamlessly, giving us more time to
              focus on growing our company.&quot;
            </p>

            <Avatar
              image={userTwoImg}
              name="Mark Roberts"
              title="Managing Director at Apex Technologies"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              &quot;Aurora Financial Services took the stress out of tax season
              for me. Their attention to detail and commitment to excellence are
              unmatched.&quot;
            </p>

            <Avatar
              image={userThreeImg}
              name="Susan Taylor"
              title="Owner of Taylor Designs"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-4 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-md w-14 h-14">
        <Image
          src={props.image}
          width="80"
          height="80"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-pink-500 text-lg font-medium">{props.name}</div>
        <div className="text-pink-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
