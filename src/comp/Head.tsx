"use client";
import React from "react";
import Link from "next/link";

interface HeadProps {
  title?: string;
  content?: string;
}

export default function Head(props: Readonly<HeadProps>) {
  return (
    <div>
      <Link
        rel="canonical"
        href="https://https://demo.themesberg.com/landwind/"
      />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>

      {/* Meta SEO */}
      <meta name={props.title} content={props.content} />
      <meta
        name="description"
        content="Get started with a free and open-source landing page built with Tailwind CSS and the Flowbite component library."
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Themesberg" />

      {/*- Social media share */}
      <meta
        property="og:title"
        content="Landwind - Tailwind CSS Landing Page"
      />
      <meta property="og:site_name" content="Themesberg" />
      <meta
        property="og:url"
        content="https://https://demo.themesberg.com/landwind/"
      />
      <meta
        property="og:description"
        content="Get started with a free and open-source landing page for Tailwind CSS built with the Flowbite component library featuring dark mode, hero sections, pricing cards, and more."
      />
      <meta property="og:type" content="" />
      <meta
        property="og:image"
        content="https://themesberg.s3.us-east-2.amazonaws.com/public/github/landwind/og-image.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@themesberg" />
      <meta name="twitter:creator" content="@themesberg" />

      {/* Favicon */}
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link href="./output.css" rel="stylesheet" />
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </div>
  );
}
