import React from "react";
import { MainNav } from "@/components/main-nav";

const Navbar = async () => {
  return (
    <div className="border-b sticky top-0 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-8 h-16 px-4">
        <h1 className="text-3xl font-bold text-green-600 col-span-1 md:col-start-2 whitespace-nowrap flex items-center">
          Gualbertos 2
        </h1>
        <MainNav className="mx-6 pr-8 col-start-2 justify-end justify-self-end align-center" />
      </div>
    </div>
  );
};

export default Navbar;
