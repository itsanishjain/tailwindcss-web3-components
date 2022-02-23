import React from "react";
import TwitterCard from "../src/components/cards/TwitterCard";
import {
  BiHome,
  FaHashtag,
  IoIosNotificationsOutline,
  BiMessageSquareDots,
  BsBookmark,
  BsCardList,
  CgProfile,
  CgMoreO,
} from "react-icons/all";

export default function Twitter() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-[#28313b]">
      <div className="text-center text-white pt-4 font-bold text-4xl">
        Twitter
      </div>
      <div className="max-w-sm space-y-4  ">
        <TwitterCard
          icon={<BiHome className=" text-3xl font-bold text-white" />}
          text="Home"
        />

        <TwitterCard
          icon={<FaHashtag className=" text-3xl font-bold text-white" />}
          text="Explore"
        />

        <TwitterCard
          icon={
            <IoIosNotificationsOutline className=" text-3xl font-bold text-white" />
          }
          text="Notification"
        />

        <TwitterCard
          icon={
            <BiMessageSquareDots className=" text-3xl font-bold text-white" />
          }
          text="Message"
        />

        <TwitterCard
          icon={<BsBookmark className=" text-3xl font-bold text-white" />}
          text="Bookmark"
        />

        <TwitterCard
          icon={<BsCardList className=" text-3xl font-bold text-white" />}
          text="List"
        />

        <TwitterCard
          icon={<CgProfile className=" text-3xl font-bold text-white" />}
          text="Profile"
        />

        <TwitterCard
          icon={<CgMoreO className=" text-3xl font-bold text-white" />}
          text="More"
        />
      </div>
    </div>
  );
}
