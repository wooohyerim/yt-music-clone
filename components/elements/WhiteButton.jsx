"use client";

import React from "react";

import { cn } from "@/lib/utils";

const WhiteButton = ({
  icon = <></>,
  label,
  onClick = () => {},
  className = "",
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white text-black hover:bg-neutral-200 rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2 cursor-pointer",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default WhiteButton;
