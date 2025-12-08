"use client";

import { Divider, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import { LogoZG } from "../icons";
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
        base: "w-full",
        wrapper:
          "mx-auto max-w-[1290px] max-[1200px]:max-w-[1090px] max-[990px]:max-w-[840px] max-[768px]:max-w-[540px] px-[10px]",
      }}
      height={48}
    >
      <NavbarContent justify="start" className="w-1.5">
        <NavbarBrand>
          <LogoZG />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex items-center gap-4" justify="end">
        <div className="w-full mt-2 mb-2 lg:mt-0 lg:mb-0 lg:w-auto">
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
