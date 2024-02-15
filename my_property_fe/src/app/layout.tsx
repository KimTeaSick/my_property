import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";

import "./globals.css";
import Providers from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "김요셉 노후관리",
  description: "인생을 걸어라",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-center items-center h-dvh bg-sky-50">
          <div className="h-dvh w-[940px] bg-white">
            <Providers >
              <Header />
              {children}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
