"use client";

import { useSidebarMode } from "@/store/sidebarModeContext";
import { AnimatePresence, motion } from "framer-motion";

import MenuPage from "./menu";
import FilterSidebar from "./filtersidebar";
import DetailSidebar from "./detailsidebar";

type SidebarContentProps = {
  /**
   * Callback after user selects menu.
   * Desktop: biasanya noop
   * Mobile: close drawer
   */
  onAfterNavigate?: () => void;
};

const variants = {
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 12 },
};

export default function SidebarContent({
  onAfterNavigate,
}: SidebarContentProps) {
  const { mode } = useSidebarMode();

  const handleAfterNavigate = onAfterNavigate ?? (() => {});

  const renderContent = () => {
    switch (mode) {
      case "list":
        return <FilterSidebar />;

      case "detail":
        return <DetailSidebar />;

      case "menu":
      default:
        return (
          <MenuPage
            onCloseDrawer={handleAfterNavigate}
          />
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="h-full"
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
}
