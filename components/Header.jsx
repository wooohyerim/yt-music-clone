import Image from "next/image";
import React from "react";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";

const Header = ({ children }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            fill
            className="object-cover"
            src="https://images.unsplash.com/photo-1712060950750-63181fec4bf7"
            alt="bg"
            priority
          />
        </div>
        <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
        <div className="absolute top-0 bg-gradient-to-t from-black  w-full h-[400px]"></div>
      </section>
      <section className="sticky">
        <PagePadding>
          <div className="flex flex-row justify-between items-center h-[64px]">
            <article className="flex flex-row items-center min-w-[480px] h-[42px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent outline-none"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
