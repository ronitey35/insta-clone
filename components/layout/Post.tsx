import { Avatar } from "@mui/material";
import React from "react";
import Story from "./Story";
import { Bookmark, Heart, MessageCircle, Send, SmilePlus } from "lucide-react";

const Post = () => {
  return (
    <div className=" my-5 flex flex-col max-w-[500px]">
      <div className="flex py-2 justify-between items-center">
        <div className="flex px-3 items-center gap-3 justify-around">
          <Avatar
            src="/post-1.jpg"
            alt="image"
            sx={{ width: 50, height: 50 }}
            className="object-contain "
          />

          <div className="flex gap-1 flex-grow  items-center">
            <h1>Pubity Sports</h1>
            <h2> ✓</h2>
            <h1>4h</h1>
          </div>
        </div>
        <h1 className="mr-3">:</h1>
      </div>
      <div>
        <img src="/post-1.jpg" alt="" className="object-cover rounded-md p-1" />
      </div>
      {/* like,comment,bookmark */}
      <div className="flex py-2 justify-between">
        <div className="flex gap-5 items-center px-2">
          <Heart />
          <MessageCircle />
          <Send />
        </div>
        <h1 className="px-2">
          <Bookmark />
        </h1>
      </div>
      {/* description */}
      <div className="p-2 flex flex-col ">
        <p>
          PubitySports <span>✓</span> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Impedit velit quis magnam provident vitae. Sapiente
          sunt quas molestias repellendus repellat?
          <br />
          W.. <span className="text-sm text-slate-500">more</span>
        </p>
      </div>
      {/*  */}
      <div className="flex justify-between px-2">
        <input
          className="flex-grow outline-none"
          type="text"
          placeholder="Add a comment ..."
        />
        <SmilePlus className="" size={25} />
      </div>
    </div>
  );
};

export default Post;
