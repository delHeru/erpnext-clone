import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";

export default function UserMenu() {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger className="cursor-pointer">
        <Avatar
          as="button"
          className="w-8 h-8 min-w-8 p-0 rounded-full transition-transform"
          name="Heru Darmawan"
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Action" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">zoey@example.com</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
