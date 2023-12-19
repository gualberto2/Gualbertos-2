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
import Link from "next/link";

const CateringMenu = ({ className }) => {
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger className="border px-3 rounded-md border-green-800 text-green-800 hover:bg-green-100">
        Catering
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Contact</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex flex-row justify-between gap-2">
            <h4>Call:</h4>
            <Link href="tel:+18582683209" className="">
              (858) 268-3209
            </Link>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row justify-between gap-2">
            <h4>Email:</h4>
            <p>juans@gualbertos2.com</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row justify-between gap-2">
            <h4>Text: </h4>
            <p>(858) 268-3209</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CateringMenu;
