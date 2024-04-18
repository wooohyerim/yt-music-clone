"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";

import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickClose = () => {
    setIsOpen(false);
  };
  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/**logo */}
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer onClickClose={onClickClose} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const { headerImageSrc } = useUIState();
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef();

  useEffect(() => {
    const currentHeadRef = headRef.current;

    const handleScroll = () => {
      const scrollValue = headRef.current.scrollTop;

      setIsScrolled(scrollValue !== 0);
    };
    currentHeadRef?.addEventListener("scroll", handleScroll);
    return () => {
      currentHeadRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            fill
            className="object-cover"
            src={
              headerImageSrc ||
              "https://images.unsplash.com/photo-1712060950750-63181fec4bf7"
            }
            alt="bg"
            priority
          />
        </div>
        <div className=" absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
        <div className=" absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
      </section>
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="flex flex-row justify-between items-center h-[64px]">
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500
            "
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent outline-none"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
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
