import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  // console.log("before RootLayout sleep...");
  // await sleep(4000);
  // console.log("after RootLayout sleep...");
  // await sleep(2000); loading

  // throw new Error("error"); error
  return (
    <div className="min-h-[600px]">
      <div className="h-[500px] bg-neutral-700">HomePage!!!!</div>
      <div className="h-[500px] bg-neutral-700">HomePage!!!!</div>
      <div className="h-[500px] bg-neutral-700">HomePage!!!!</div>
    </div>
  );
};

export default page;
