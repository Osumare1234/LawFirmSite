"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { logo } from "@/public";


export default function Home() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className="w-full bg-white h-[10vh] items-center justify-between sm:flex xm:flex hidden right-0 z-50 padding-x">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={100}
            className="w-[100px] object-cover"
          />
        </div>
        <div
          onClick={() => {
            setIsActive(() => !isActive);
          }}
          className="w-[40px] h-[40px] rounded-full bg-[#f148a2] cursor-pointer flex items-center justify-center relative z-50"
        >
          <div
            className={`w-[50%] h-[2px] bg-white absolute top-[50%] ${
              !isActive && "top-[40%]"
            } transform -translate-x-1/2 -translate-y-1/2`}
            style={{
              transform: isActive ? "rotate(45deg)" : "none",
              transition: "transform 0.3s",
            }}
          />
          <div
            className={`w-[50%] h-[2px] bg-white absolute top-[50%] ${
              !isActive && "top-[52%]"
            } transform -translate-x-1/2 -translate-y-1/2`}
            style={{
              transform: isActive ? "rotate(-45deg)" : "none",
              transition: "transform 0.3s",
            }}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </>
  );
}
