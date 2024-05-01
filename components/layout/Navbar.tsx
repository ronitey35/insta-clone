import { Heart, Search, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center p-2 md:hidden">
      <h1 className="text-white text-2xl px-2 py-2 md:hidden">ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪</h1>

      {/* BreakPoints */}
      <div className=" flex  justify-between gap-8  items-centers md:hidden">
        <div className="relative  ">
          <input
            type="search"
            placeholder="Search here"
            className="outline-none rounded-lg bg-slate-700 px-3 py-[6px] placeholder:text-center "
          />
          <Search color="white" className="absolute top-1 left-2" />
        </div>
        <a href="/notification">
          <Heart color="white" size={29} className="relative right-[9px]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
