"use client";

import React from "react";

import { ArrowUpRight } from "lucide-react";
import { Chip } from "@heroui/react";
import { Skeleton } from "@heroui/react";

export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const toggleLoad = () => {
    setIsLoaded(!isLoaded);
  }


  return (
    <div>
      <div className="mx-1">
        <div className="text-lg font-medium flex">
          <Skeleton className="rounded-lg" isLoaded={isLoaded}>
          Your Shortcut
          </Skeleton>
          </div>
      </div>
      <Skeleton className="rounded-lg mt-2" isLoaded={isLoaded}>
      <div className="mt-2 border border-gray-200 dark:border-stone-800 h-50 rounded-lg items-center">
        <div className="mt-2 ml-3 text-sm">P&L</div>
      </div>
      </Skeleton>

      <div className="mt-4 mx-1">
        <div className="grid grid-cols-4 max-[996px]:grid-cols-3 max-[750px]:grid-cols-2 max-[570px]:grid-cols-1 gap-4 mb-10 text-sm">
          <a className="flex items-center gap-1" href="#">
            Item <ArrowUpRight size={14} strokeWidth={1} />
          </a>
          <a className="flex items-center gap-1" href="#">
            Supplier <ArrowUpRight size={14} strokeWidth={1} />
          </a>
          <a className="flex items-center gap-1" href="#">
            Sales Invoice <ArrowUpRight size={14} strokeWidth={1} />
          </a>
          <a className="flex items-center gap-1" href="#">
            Leaderboard <ArrowUpRight size={14} strokeWidth={1} />
          </a>

          <a className="flex items-center gap-1" href="#">
            Customer <ArrowUpRight size={14} strokeWidth={1} />
            <Chip size="sm" className="bg-[#f3f3f3] dark:text-[#171717]">
              86
            </Chip>
          </a>
          <a className="flex items-center gap-1" href="#">
            Supplier Details <ArrowUpRight size={14} strokeWidth={1} />
            <Chip size="sm" className="bg-[#f3f3f3] dark:text-[#171717]">
              25
            </Chip>
          </a>
          <a className="flex items-center gap-1" href="#">
            Lead <ArrowUpRight size={14} strokeWidth={1} />
            <Chip size="sm" className="bg-[#f3f3f3] dark:text-[#171717]">
              124
            </Chip>
          </a>
        </div>
      </div>

      <div className="mt-4 mx-1">
        <div className="text-lg font-medium">Reports & Masters</div>
      </div>
      <div className="mt-4 ml-3">
        <div className="grid grid-cols-3 max-[750px]:grid-cols-2 max-[570px]:grid-cols-1 gap-8 mb-10 text-sm">
          {/* <!-- COLUMN 1 --> */}
          <div>
            <h4 className="text-[16px] font-medium mb-3">Accounting</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center gap-1">
                  Chart of Accounts <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Company <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Customer <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Supplier <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- COLUMN 2 --> */}
          <div>
            <h4 className="text-[16px] font-medium mb-3">Stock</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center gap-1">
                  Item <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Warehouse <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Brand <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Unit of Measure <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- COLUMN 3 --> */}
          <div>
            <h4 className="text-[16px] font-medium mb-3">CRM</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center gap-1">
                  Lead <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Customer Group <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  Territory <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- COLUMN 4 --> */}
          <div>
            <h4 className="text-[16px] font-medium mb-3">Data Import and Settings</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="flex items-center gap-1">
                  Letter Head <ArrowUpRight size={14} strokeWidth={1} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
