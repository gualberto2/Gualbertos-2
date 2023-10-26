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
      href: "/order",
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
