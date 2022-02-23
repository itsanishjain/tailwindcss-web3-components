import React from "react";
import TwitterSideNav from "../src/components/navigation/TwitterSideNav";

export default function Twitter() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-[#28313b]">
      <div className="text-center text-white pt-4 font-bold text-4xl">
        Twitter
      </div>
      <TwitterSideNav />
    </div>
  );
}
