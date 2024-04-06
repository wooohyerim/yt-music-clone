"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import IconButton from "./IconButton";

const Logo = ({ isInDrawer = false, onClickClose }) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    // home으로 이동하는 로직
    push("/");
  };

  const onClickMenu = () => {};

  // const onClickClose = ()=> {

  // }

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton icon={<IoClose size={24} />} onClickIcon={onClickClose} />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickMenu}
        />
      )}

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
