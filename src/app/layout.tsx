import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/Navbar";
import ScrollObserver from "../../utils/scroll-observer";

export const metadata: Metadata = {
  title: "Saduak Web",
  description: "Web for Introducing Saduak Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollObserver>
        <Navbar />
        {children}
        </ScrollObserver>
      </body>
    </html>
  );
}
