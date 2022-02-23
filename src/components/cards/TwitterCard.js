import React from "react";
import { AiFillHome } from "react-icons/ai";

export default function TwitterCard({ icon, text }) {
  return (
    <div className="hover:rounded-[4rem] flex space-x-4 items-center mx-4 p-2 hover:bg-slate-500 cursor-pointer ">
      {icon}
      <div className=" text-2xl font-bold text-white">{text}</div>
    </div>
  );
}
