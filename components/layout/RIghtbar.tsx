import { Avatar } from "@mui/material";
import React from "react";

const RIghtbar = () => {
  return (
    <div className="bg-black h-screen w-[00px] lg:w-[400px]">
      <div className="p-8 flex justify-start gap-6 items-center">
        <Avatar
          className="size-16  "
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <section className="flex flex-col ">
          <h1 className="font-semibold text-white cursor-pointer">
            Ronit Sharma
          </h1>
          <h2 className="text-white cursor-pointer">ronitey35</h2>
        </section>

        <h1 className="text-sm font-sans text-blue-500  cursor-pointer ml-4 hover:text-white">
          Switch{" "}
        </h1>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between gap-20 mx-auto">
          <h1 className="font-semibold text-white mr-4 pb-1">
            {" "}
            Suggestion for you{" "}
          </h1>
          <h1 className="font-medium cursor-pointer text-slate-400 hover:text-slate-500 mx-3">
            See all
          </h1>
        </div>
        <div className="p-2 mx-3 flex justify-start gap-6 items-center">
          <Avatar
            className="size-16  "
            src="https://cdn.images.express.co.uk/img/dynamic/167/940x/secondary/Sydney-Sweeney-5273418.avif?r=1710781710774"
          />
          <section className="flex flex-col ">
            <h1 className="font-semibold text-white cursor-pointer">
              Sydney Sweeney
            </h1>
            <h2 className="text-slate-400 font-sans font-thin">
              suggested for you
            </h2>
          </section>

          <h1 className="text-sm font-sans text-blue-500 ml-4 cursor-pointer hover:text-white">
            Follow{" "}
          </h1>
        </div>
        <div className="p-2 mx-3 flex justify-start gap-6 items-center">
          <Avatar
            className="size-16  "
            src="https://cdn.i-scmp.com/sites/default/files/styles/wide_landscape/public/d8/images/methode/2019/05/03/40b7c63c-59a2-11e9-bbcc-84176f6dd1e7_image_hires_134058.jpg?itok=sBHf732C&v=1556862065"
          />
          <section className="flex flex-col ">
            <h1 className="font-semibold text-white cursor-pointer">
              Bibek Bhattrai
            </h1>
            <h2 className="text-slate-400 font-sans font-thin">
              suggested for you
            </h2>
          </section>

          <h1 className="text-sm font-sans text-blue-500 ml-4 cursor-pointer hover:text-white">
            Follow{" "}
          </h1>
        </div>
        <div className="p-2  mx-3 flex justify-start gap-6 items-center">
          <Avatar
            className="size-16  "
            src="https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/tenz.png"
          />
          <section className="flex flex-col ">
            <h1 className="font-semibold text-white cursor-pointer">
              Mausam Khadka
            </h1>
            <h2 className="text-slate-400 font-sans font-thin">
              suggested for you
            </h2>
          </section>

          <h1 className="text-sm cursor-pointer font-sans text-blue-500 ml-4 hover:text-white">
            Follow{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RIghtbar;
