import { DM_Serif_Text } from "next/font/google";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const dmserif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="p-4 md:py-12 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + dmserif.className
        }
      >
        <span className="textGradient ">Krack</span> help you to quickly have a
        custom <span className="textGradient">NEET</span> mock test!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create custom NEET question papers and solve them quickly and{" "}
        <span className="font-semibold">review your performance</span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href={"/dashboard"}>
          <Button text="Sign Up"></Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button dark text="Login"></Button>
        </Link>
      </div>
    </div>
  );
}
