"use client";

import { Divider, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import { LogoZG } from "../icons";
import PetaMap from "./petamap";
import UserMenu from "./usermenu";
import HelpMenu from "./helpmenu";
import NotifMenu from "./notifmenu";
import GlobalSearch from "./globalSearch";

export default function HeaderMenu() {
  return (
    <Navbar
      className="border-b border-gray-200"
      position="sticky"
      maxWidth="xl"
      height={48}
    >
      <NavbarBrand>
        <LogoZG />
        <PetaMap />
      </NavbarBrand>

      <NavbarContent as="div" className="items-center gap-0.5" justify="end">
        <GlobalSearch />
        <NotifMenu />
        <div className="flex h-7 items-center space-x-4 text-small">
          <Divider orientation="vertical" />
        </div>
        <HelpMenu />
        <UserMenu />
      </NavbarContent>
    </Navbar>
  );
}
