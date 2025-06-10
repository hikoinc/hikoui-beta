import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "src/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" className="dark">
    <body className={inter.className}>{children}</body>
  </html>
);

export const metadata: Metadata = {
  title: "Hiko",
  description: "Hiko",
};

export default RootLayout;
