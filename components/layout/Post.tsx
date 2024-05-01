import { Avatar } from "@mui/material";
import React from "react";

const Post = () => {
  return (
    <div className="text-white bg-blue-200 h-screen">
      <div>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={{ width: 60, height: 60 }}
          className="border-2 border-pink-500 - amber-500 "
        />
      </div>
    </div>
  );
};

export default Post;
