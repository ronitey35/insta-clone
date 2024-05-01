"use client";
import Post from "@/components/layout/Post";
import Story from "@/components/layout/Story";
import React from "react";

export default function page() {
  return (
    <div className="">
      <div className="hidden justify-between  md:flex">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div className=" flex  gap-3 items-center mx-auto overflow-hidden md:hidden">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div className="mx-auto">
        <Post />
      </div>
    </div>
  );
}
