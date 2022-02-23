import React from "react";
import TwitterCard from "../cards/TwitterCard";
// import {
//   BiHome,
//   FaHashtag,
//   IoIosNotificationsOutline,
//   BiMessageSquareDots,
//   BsBookmark,
//   BsCardList,
//   CgProfile,
//   CgMoreO,
// } from "react-icons/fa";

import { FaHome, FaHashtag } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageSquareDots } from "react-icons/bi";
import { BsBookmark, BsCardList } from "react-icons/bs";
import { CgProfile, CgMoreO } from "react-icons/cg";

export default function TwitterSideNav() {
  return (
    <>
      <div className="max-w-sm space-y-4  ">
        <TwitterCard
          icon={<FaHome className=" text-2xl font-medium text-white" />}
          text="Home"
        />

        <TwitterCard
          icon={<FaHashtag className=" text-2xl font-medium text-white" />}
          text="Explore"
        />

        <TwitterCard
          icon={
            <IoIosNotificationsOutline className=" text-2xl font-medium text-white" />
          }
          text="Notification"
        />

        <TwitterCard
          icon={
            <BiMessageSquareDots className=" text-2xl font-medium text-white" />
          }
          text="Message"
        />

        <TwitterCard
          icon={<BsBookmark className=" text-2xl font-medium text-white" />}
          text="Bookmark"
        />

        <TwitterCard
          icon={<BsCardList className=" text-2xl font-medium text-white" />}
          text="List"
        />

        <TwitterCard
          icon={<CgProfile className=" text-2xl font-medium text-white" />}
          text="Profile"
        />

        <TwitterCard
          icon={<CgMoreO className=" text-2xl font-medium text-white" />}
          text="More"
        />
      </div>
    </>
  );
}
