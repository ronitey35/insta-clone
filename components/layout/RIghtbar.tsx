import { Avatar } from "@mui/material";
import React from "react";

const DATA = [
  {
    name: "Sydney Sweeney",
    imgSrc:
      "https://cdn.images.express.co.uk/img/dynamic/167/940x/secondary/Sydney-Sweeney-5273418.avif?r=1710781710774",
  },
  {
    name: "Prajwol Pandey",
    imgSrc:
      "https://cdn.i-scmp.com/sites/default/files/styles/wide_landscape/public/d8/images/methode/2019/05/03/40b7c63c-59a2-11e9-bbcc-84176f6dd1e7_image_hires_134058.jpg?itok=sBHf732C&v=1556862065",
  },
  {
    name: "Prajwol Pandey",
    imgSrc:
      "https://cdn.i-scmp.com/sites/default/files/styles/wide_landscape/public/d8/images/methode/2019/05/03/40b7c63c-59a2-11e9-bbcc-84176f6dd1e7_image_hires_134058.jpg?itok=sBHf732C&v=1556862065",
  },
];

const Rightbar = () => {
  return (
    <div className=" bg-black h-[100vh-3px] w-[400px] justify-end px-5 pt-10 hidden xl:block ">
      <div className="my-auto ">
        <div className="flex items-center justify-between">
          <div className="p-3 mx-3 flex justify-around gap-3  items-center">
            <Avatar
              className="size-12"
              src="https://cdn.i-scmp.com/sites/default/files/styles/wide_landscape/public/d8/images/methode/2019/05/03/40b7c63c-59a2-11e9-bbcc-84176f6dd1e7_image_hires_134058.jpg?itok=sBHf732C&v=1556862065"
            />
            <section className="flex flex-col ">
              <h1 className="font-semibold text-md text-white cursor-pointer">
                Ronit Sharma
              </h1>
              <h2 className="text-slate-400 text-md font-sans font-thin">
                ronitey35
              </h2>
            </section>
          </div>
          <h1 className="text-sm pr-4 font-sans text-blue-500 ml-4 cursor-pointer hover:text-white">
            Switch
          </h1>
        </div>

        <div className="flex justify-between items-center gap-10 mx-auto">
          <h1 className="font-semibold  text-white mr-4 px-4  py-4">
            Suggestion for you
          </h1>
          <h1 className="font-medium cursor-pointer text-slate-400  hover:text-slate-500 mx-3">
            See all
          </h1>

          {/* avtar section */}
        </div>
        <>
          {DATA.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="p-3 mx-3 flex justify-around gap-3  items-center">
                <Avatar className="size-12" src={item.imgSrc} />
                <section className="flex flex-col ">
                  <h1 className="font-normal text-sm text-white cursor-pointer">
                    {item.name}
                  </h1>
                  <h2 className="text-slate-400 text-sm font-sans font-thin">
                    Suggested for you
                  </h2>
                </section>
              </div>
              <h1 className="text-sm pr-4 font-sans text-blue-500 ml-4 cursor-pointer hover:text-white">
                Follow{" "}
              </h1>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Rightbar;
