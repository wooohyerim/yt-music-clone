import React from "react";
import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-ful h-full">
      <Header>{children}</Header>
    </div>
  );
};
export default layout;
