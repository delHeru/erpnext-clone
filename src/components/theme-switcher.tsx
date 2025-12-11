"use client";

import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";
import { DarkTogggleIcon } from "./icons";

export default function ThemeSwitcher() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
      isIconOnly
      variant="light"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <DarkTogggleIcon size={22} />
    </Button>
  );
}
