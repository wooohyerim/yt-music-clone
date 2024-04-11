// import { sleep } from "@/lib/utils";
import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
  // console.log("before RootLayout sleep...");
  // await sleep(4000);
  // console.log("after RootLayout sleep...");
  // await sleep(2000); loading

  // throw new Error("error"); error

  const dummyPlaylistArray1 = [...dummyPlaylistArray];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt-12"></div>
        <PlayListCarousel
          playListArray={[...dummyPlaylistArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="다시 듣기"
          subTitle="woo"
        />
      </div>
    </PagePadding>
  );
};

export default page;
