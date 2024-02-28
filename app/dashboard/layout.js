import Navigation from "@/components/DashboardCompo/Navigation";
import React from "react";

const DashboarLayout = ({ children }) => {
  return (
    <div className="w-full  flex flex-row relative text-zinc-50">
      <Navigation />

      <div className="flex flex-col p-10 ml-20 w-full gap-5">{children}</div>
      {/* <div className="max-w-screen-xl  min-h-screen ">{children}</div> */}
    </div>
  );
};

export default DashboarLayout;
