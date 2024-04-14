import React from "react";

import { getPlaylistById } from "@/lib/dummyData";
import { permanentRedirect } from "next/navigation";
import { getRandomElementFromArray } from "@/lib/utils";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";

interface PlaylistPageProps {
  searchParams: {
    list: string;
  };
}

const page = async (props: PlaylistPageProps) => {
  const playList = await getPlaylistById(Number(props.searchParams.list));
  if (!playList) {
    permanentRedirect("/");
  }

  const imageSrc = getRandomElementFromArray(playList.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-12"></div>
      <PlayListHead playList={playList} />
      <div className="mt-12"></div>
      <section className="flex flex-col gap-4">
        {playList.songList.map((song, idx) => {
          return <SongCardRowExpand song={song} key={idx} />;
        })}
      </section>
    </PagePadding>
  );
};

export default page;
