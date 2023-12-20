"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { MdEmail } from "react-icons/md";

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
          <div className="flex flex-row justify-between gap-8">
            <h4>Call:</h4>
            <Link
              href="tel:+18582683209"
              className="flex flex-row justify-between items-center gap-2"
            >
              <FaPhoneAlt />
              (858) 268-3209
            </Link>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row justify-between gap-2">
            <h4>Email:</h4>
            <Link
              href="mailto:support@gualbertos2.com"
              className="flex flex-row justify-between items-center gap-2"
            >
              <MdEmail />
              <p>juans@gualbertos2.com</p>
            </Link>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex flex-row justify-between gap-8">
            <h4>Text: </h4>
            <Link
              href="sms:+18582683209"
              className="flex flex-row justify-between items-center gap-2"
            >
              <IoIosText />
              <p>(858) 268-3209</p>
            </Link>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CateringMenu;
