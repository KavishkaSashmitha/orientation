import type { Metadata } from "next";
import "./globals.css";
import { Chakra_Petch } from "next/font/google";

export const metadata: Metadata = {
  title: "SE Inauguration 2025 February | SLIIT SESC",
  description: "The SE Inauguration of SLIIT SE students, 2025 July",
};

const chakra = Chakra_Petch({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakra.className} bg-black-background bg-grids-pattern`}>
        {children}
      </body>
    </html>
  );
}
