'use client';

import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Button,
} from "@heroui/react";

import SidebarContent from "./sidebarcontent";

import React, { useState }  from "react";
import { ChevronsLeft, ChevronsRight, Menu } from "lucide-react";


export default function SidebarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <Button
          onPress={() => setIsOpen(true)}
          isIconOnly
          variant="light"
          size="sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden max-[996px]:flex"
        >
          {isHovered ? (
            !isOpen ? (
              <ChevronsLeft size={24} strokeWidth={2} />
            ) : (
              <ChevronsRight size={24} strokeWidth={2} />
            )
          ) : (
            <Menu size={18} strokeWidth={2.5} />
          )}
        </Button>
      <Drawer
      className="hidden max-[996px]:block" 
      hideCloseButton
      size="xs"
      placement="left"
      isOpen={isOpen} 
      onOpenChange={setIsOpen}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>
               {/* <MenuPage onCloseDrawer={() => setIsOpen(false)} /> */}
                <SidebarContent
                onAfterNavigate={() => setIsOpen(false)}
              />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
