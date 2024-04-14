"use client";

import React from "react";

import { Song } from "@/types";
import Image from "next/image";

import {
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
  FiMoreVertical,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId, name } = song;
  const { push } = useRouter();

  const onClickChannel = () => {
    push(`channel/${channelId}`);
  };

  return (
    <article className="flex flex-row items-center gap-4 w-full h-[48px] relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image
          src={song.imageSrc}
          alt="img"
          sizes="full"
          fill
          className="object-cover"
        />
        <section className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>

      <div className="flex flex-row gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{name}</div>
        <div
          onClick={onClickChannel}
          className="text-neutral-500 hover:underline cursor-pointer"
        >
          {channel}
        </div>
      </div>

      <section className="hidden group-hover:flex absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-[120px] bg-[rgba(0,0,0,0.7)]">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;