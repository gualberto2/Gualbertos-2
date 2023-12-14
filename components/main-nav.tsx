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
    <nav className="col-start-4 md:col-start-4 lg:col-start-5 flex items-center flex-nowrap whitespace-nowrap">
      <div
        className={cn(
          "hidden items-center space-x-4 lg:space-x-6 md:flex ",
          className
        )}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-md font-medium transition-colors hover:text-primary",
              route.active
                ? "text-black, dark:text-white font-bold"
                : "text-muted-foreground",
              route.label === "Order Online" &&
                "text-green-800 font-bold px-4 py-2 border border-green-800 hover:text-white hover:bg-green-800 rounded-lg"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className={cn("block space-x-4 lg:space-x-6 md:hidden", className)}>
        <Sheet>
          <SheetTrigger>
            <RxHamburgerMenu className="text-xl self-end justify-self-end" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary ",
                    route.active
                      ? "text-black, dark:text-white border-l border-red-300 bg-opacity-20 bg-gray-300 "
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
