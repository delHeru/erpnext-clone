"use client";

import { Divider, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import { DarkTogggleIcon, LogoZG } from "../icons";
import PetaMap from "./petamap";
import UserMenu from "./usermenu";
import HelpMenu from "./helpmenu";
import NotifMenu from "./notifmenu";
import GlobalSearch from "./globalSearch";
import ThemeSwitcher from "../theme-switcher";

export default function HeaderMenu() {
  return (
    <Navbar
      classNames={{
        base: "w-full border-b border-gray-200 dark:border-stone-800 bg-(--heroui-background) dark:bg-(--heroui-background)",
        wrapper:
          "mx-auto max-w-[1290px] max-[1200px]:max-w-[1000px] max-[990px]:max-w-[840px] max-[768px]:max-w-[540px] px-3",
      }}
      height={48}
    >
      <NavbarContent justify="start" className="max-w-8.5">
        <NavbarBrand className="w-1">
          <LogoZG />
          {/* <DarkTogggleIcon /> */}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="start" className="max-[990px]:hidden max-w-60">
        <PetaMap />
      </NavbarContent>
      <NavbarContent className="" justify="end">
        <div className="w-full flex justify-end">
          <GlobalSearch />
        </div>
        <NotifMenu />
        <div className="h-7 items-center">
          <Divider orientation="vertical" />
        </div>
        <div className="max-[990px]:hidden">
          <HelpMenu />
        </div>
        <UserMenu />
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
