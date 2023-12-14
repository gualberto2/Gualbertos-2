"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CateringMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          className="border-green-800 text-green-800 hover:bg-green-100"
        >
          Catering
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Contact</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Phone</DropdownMenuItem>
        <DropdownMenuItem>Email</DropdownMenuItem>
        <DropdownMenuItem>Text</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CateringMenu;
