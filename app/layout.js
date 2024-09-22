import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { DM_Serif_Text } from "next/font/google";
import Link from "next/link";
import Head from "./head";
import Logout from "@/components/Logout";
import Image from "next/image";

const dmserif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Krack",
  description: "A quick NEET test app",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <Image
          src="/assets/logos/logo_main.svg"
          alt="krack_logo"
          width={150}
          height={50}
        />
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p>&copy; 2024 Krack. All rights reserved.</p>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "w-full max-w-[1000] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 "
          }
        >
          <header>{header}</header>
          {children}
          <footer>{footer}</footer>
        </body>
      </AuthProvider>
    </html>
  );
}
