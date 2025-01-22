import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
const inter = Inter({ subsets: ["latin"] });
import ThemeChanger from "@/components/ThemeChanger";
export const metadata: Metadata = {
  title: "Aurora",
  description: "Tax and accounting services for small businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Container className="dark:bg-gray-900">
          <ThemeProvider attribute="class">
            <Navbar />

            <div>{children}</div>
            <Footer />
          </ThemeProvider>
        </Container>
      </body>
    </html>
  );
}
