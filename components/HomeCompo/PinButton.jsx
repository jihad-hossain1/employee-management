"use client";
import React from "react";
import Pin from "../Button/Pin";
import Link from "next/link";

const PinButton = () => {
  return (
    <div className="h-[70vh] w-full flex items-center justify-center ">
      <>
        <Pin title="Go To Dashboard" href="dashboard">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Employee Management
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                A good website {`doesn't`} just look good—it works well.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </Pin>
      </>
    </div>
  );
};

export default PinButton;
