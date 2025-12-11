import React from "react";

import { IconSvgProps } from "@/types";

import {
  Home,
  FileText,
  Users,
  Settings,
  Menu,
} from "lucide-react";

export const LogoZG: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 64 64"
    width={size || width}
    {...props}
  >
    <path
      fill="currentColor"
      d="M64,4.6c0,0.3,0,0.7,0,1c0,0-0.1,0.1-0.1,0.1C63.8,7,63.2,8,62.3,8.9c-5.4,5.4-10.8,10.8-16.2,16.2 c-0.1,0.1-0.2,0.2-0.4,0.4c0.3,0,0.4,0,0.6,0c4.1,0,8.3,0,12.4,0c0.4,0,0.9,0,1.3,0.1c2.4,0.6,4,2.6,4,5c0,9.3,0,18.5,0,27.8 c0,0.4,0,0.8-0.1,1.1c-0.3,2-1.8,3.7-3.7,4.2c-0.2,0.1-0.5,0.1-0.7,0.2c-18.2,0-36.4,0-54.7,0c-0.1,0-0.2-0.1-0.2-0.1 c-2.9-0.4-4.9-3.3-4.2-6.1c0.2-1,0.7-1.8,1.4-2.5c1.5-1.5,2.9-2.9,4.4-4.4c0-0.1,0-0.1-0.1-0.1c-1.8-2.6-3.3-5.4-4.3-8.4 c-0.7-2.2-1.2-4.4-1.5-6.7c0-0.4-0.1-0.8-0.2-1.2c0-10,0-19.9,0-29.9c0-0.1,0.1-0.1,0.1-0.2c0.4-2.1,1.6-3.5,3.6-4.1 C4,0.1,4.3,0.1,4.5,0c18.3,0,36.6,0,54.8,0c0.1,0,0.1,0.1,0.2,0.1c2.1,0.3,3.5,1.5,4.2,3.5C63.9,3.9,63.9,4.3,64,4.6z M13.4,43.5 c11.1-11.2,22.1-22.2,33.2-33.3c-0.2,0-0.4,0-0.6,0c-4.7,0-9.4,0-14.1,0c-1.1,0-2.3,0.1-3.4,0.3c-4.4,0.6-8.2,2.5-11.4,5.5 c-4.2,3.9-6.5,8.8-6.9,14.6c-0.2,3.2,0.2,6.3,1.4,9.3C12.2,41.1,12.8,42.3,13.4,43.5z M20.6,50.7c7.3,4,14.6,4.3,21.9,0.2 c5.9-3.3,9.3-8.4,10.7-15c-0.2,0-0.3,0-0.4,0c-5.7,0-11.4,0-17.1,0c-0.2,0-0.5,0.1-0.6,0.3c-4.7,4.7-9.4,9.4-14.1,14.1 C20.9,50.4,20.8,50.5,20.6,50.7z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export const DarkTogggleIcon: React.FC<IconSvgProps> = ({
  size = 24,
  height,
  ...props
}) => (
  <svg fill="none"
      height={size || height} 
      viewBox="0 0 24 24" 
      {...props}
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        <path d="M12 3l0 18"></path><path d="M12 9l4.65 -4.65"></path>
        <path d="M12 14.3l7.37 -7.37"></path>
        <path d="M12 19.6l8.85 -8.85"></path></svg>)

export const Icons = {
  home: Home,
  file: FileText,
  users: Users,
  settings: Settings,
  menu: Menu,
};

export type IconName = keyof typeof Icons;
