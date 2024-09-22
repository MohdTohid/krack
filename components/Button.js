import { DM_Serif_Text } from "next/font/google";
import React from "react";

const dmserif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });

export default function Button(props) {
  const { text, dark, full, clickHandler, disable } = props;

  return (
    <button
      onClick={disable ? null : clickHandler}
      disabled={disable}
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-indigo-600 " +
        (dark ? "text-white bg-indigo-600 " : "text-indigo-600 ") +
        (full ? "grid place-items-center w-full " : " ") +
        (disable ? "opacity-50 cursor-not-allowed " : "hover:opacity-60 ")
      }
    >
      <p
        className={
          "px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 " + dmserif.className
        }
      >
        {text}
      </p>
    </button>
  );
}
