import { Avatar } from "@mui/material";
import {
  Clapperboard,
  Heart,
  Home,
  Instagram,
  Menu,
  MessageCircle,
  Plus,
  Search,
  SearchCode,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-black h-[100%] w-[70px] lg:w-[240px] ">
      <Link
        href="/"
        className="m-2 flex items-center p-2 gap-8  rounded-2xl hover:bg-slate-900 transition-all duration-300"
      >
        <Instagram color="#ffffff" className="size-11 lg:hidden" />
        <span className="hidden lg:flex text-white p-2 px-12 text-2xl">
          ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪{" "}
        </span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8  rounded-xl hover:bg-slate-900 transition-all duration-300 "
      >
        <Home color="#ffffff" className="size-8" />
        <span className="hidden lg:flex text-white">Home</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8 rounded-xl hover:bg-slate-900 transition-all duration-300"
      >
        <Search
          color="#ffffff"
          className="size-8 hover:bg-slate-900 transition-all duration-300"
        />
        <span className="hidden lg:flex text-white">Search</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8 rounded-xl hover:bg-slate-900 transition-all duration-300"
      >
        <SearchCode color="#ffffff" className="size-8" />
        <span className="hidden lg:flex text-white">Explore</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8 rounded-xl hover:bg-slate-900 transition-all duration-300"
      >
        <Clapperboard color="#ffffff" className="size-8" />
        <span className="hidden lg:flex text-white">Reels</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8 rounded-xl hover:bg-slate-900 transition-all duration-300"
      >
        <MessageCircle color="#ffffff" className="size-8" />
        <span className="hidden lg:flex text-white">Messenger</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8 rounded-xl hover:bg-slate-900 transition-all duration-300"
      >
        <Heart color="#ffffff" className="size-8" />
        <span className="hidden lg:flex text-white">Notifications</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8 rounded-xl hover:bg-slate-900 transition-all duration-300"
      >
        <Plus color="#ffffff" className="size-8" />
        <span className="hidden lg:flex text-white">New Post</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex rounded-xl items-center p-2   hover:bg-slate-900 transition-all duration-300 gap-8 "
      >
        <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <span className="hidden lg:flex text-white">Profile</span>
      </Link>
      <Link
        href="/"
        className="m-2 flex items-center p-[10px]  gap-8 rounded-xl hover:bg-slate-900 transition-all duration-300"
      >
        <Menu color="#ffffff" className="size-8 ml-1" />
        <span className="hidden lg:flex text-white pl-1">More</span>
      </Link>
    </div>
  );
};

export default Sidebar;
