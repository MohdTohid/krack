import { DM_Serif_Text } from "next/font/google";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import CallToAction from "./CallToAction";

const dmserif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div className="p-4 md:py-12 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center max-w-[1200px] mx-auto " + dmserif.className
        }
      >
        <span className="textGradient ">Krack</span> helps you to quickly have a
        custom <span className="textGradient">NEET</span> mock test!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create custom NEET question papers and solve them quickly and{" "}
        <span className="font-semibold">review your performance</span>
      </p>
      <CallToAction />
    </div>
  );
}
