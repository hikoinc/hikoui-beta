import type { Metadata } from "next";
import "src/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Hikoui",
  description: "Hikoui",
};

export default RootLayout;
