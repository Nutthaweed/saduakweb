import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
