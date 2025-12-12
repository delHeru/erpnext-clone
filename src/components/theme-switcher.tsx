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
      onPress={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      <DarkTogggleIcon size={24} className="text-zinc-800 dark:text-zinc-200" />
    </Button>
  );
}
