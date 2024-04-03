"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    // home으로 이동하는 로직
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={onClickMenu}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image
          src={"/main-logo.svg"}
          width={100}
          height={30}
          alt="logo"
          priority
        />
      </div>
    </section>
  );
};

export default Logo;
