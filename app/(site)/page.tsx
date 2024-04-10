// import { sleep } from "@/lib/utils";
import React from "react";
import Category from "./components/Category";

const page = async () => {
  // console.log("before RootLayout sleep...");
  // await sleep(4000);
  // console.log("after RootLayout sleep...");
  // await sleep(2000); loading

  // throw new Error("error"); error
  return (
    <div className="min-h-[600px]">
      <div className="mt-9"></div>
      <Category />
    </div>
  );
};

export default page;
