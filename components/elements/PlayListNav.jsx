"use client";

import React from "react";
import { IoMdPlayCircle } from "react-icons/io";

const PlayListNav = ({ playlist }) => {
  const { id, owner, playlistName, songList } = playlist;

  const onClickPlay = () => {
    // TODO play music
  };

  return (
    <li className="flex flex-row justify-between items-center mx-3 px-4 h-[56px] rounded-lg  hover:bg-neutral-700 group">
      <div>
        <div className="text-[14px] ">{playlistName}</div>
        <div className="text-[12px] text-neutral-500">{owner}</div>
      </div>
      <div
        className="hidden group-hover:block cursor-pointer"
        onClick={onClickPlay}
      >
        <IoMdPlayCircle size={30} />
      </div>
    </li>
  );
};

export default PlayListNav;
