"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

import { RxHamburgerMenu } from "react-icons/rx";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/menu", label: "Menu", active: pathname === "/menu" },
    { href: "/delivery", label: "Delivery", active: pathname === "/delivery" },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
    {
      href: "https://food.google.com/chooseprovider?restaurantId=/g/1tfm6z14&g2lbs=ANTchaMpSH41hd2FOcGGPQWAT02MnF0CoeDtVHNHA0cDEELgkkopsL9-83bq6Tsmtht8HXCbqkJ-ZAl2UKZqPkjdJbfuYyMn6du2vwVVBy8nMal3OxQK16hTFH14fRHCnYwj0fkpYPRD5LzlzG77G5kxH1iFgsnCHA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=qHx4ZbXKBIH4kPIPqrCVmAI&ei=qHx4ZbXKBIH4kPIPqrCVmAI&fo_s=OA&opi=89978449&sei=CVEf821a8GuyEa1C5IlnHWcx&utm_campaign&utm_source=search",
      label: "Order Online",
      active: pathname === "/order",
    },
  ];

  return (
    
  );
}
