"use client";
import Navbar from "@/components/layout/navbar";
import Post from "@/components/layout/post";
import Story from "@/components/layout/Story";
import React from "react";

export default function page() {
  return (
    <div className=" h-screen bg-screen-600">
      <Navbar />
      <div className="flex flex-col ">
        <div className="flex justify-evenly ">
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
        <div className=" mx-auto ">
          <Post />
        </div>
      </div>
    </div>
  );
}
