import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Item {
  id: number;
  item_name: string;
  item_code: string;
  category: string;
  stock: number;
  status: string;
  created_at: string;
  updated_at: string;
}
