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
      className="border-b border-gray-200 dark:border-stone-800 px-2"
      position="sticky"
      maxWidth="full"
      height={48}
    >
      <NavbarBrand className="gap-2 max-w-7xl">
        <LogoZG />
        <PetaMap />
      </NavbarBrand>

      <NavbarContent
        as="div"
        className="items-center gap-2 w-full md:w-auto"
        justify="end"
      >
        <div className="w-full mt-2 mb-2 lg:mt-0 lg:mb-0 lg:w-auto">
          <GlobalSearch />
        </div>
        <NotifMenu />
        <div className="hidden md:flex h-7 items-center">
          <Divider orientation="vertical" />
        </div>
        <div className="hidden lg:block">
          <HelpMenu />
        </div>
        <UserMenu />
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
