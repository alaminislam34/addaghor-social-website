"use client";

import { Group, Home, Tv, Users } from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="bg-white shadow py-4">
      <nav className="max-w-360 mx-auto w-11/12 flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-Primary">AddaGhor</h1>
        </div>
        <div className="">
          <ul className="flex flex-row gap-6 items-center text-Primary *:py-2 *:px-4 *:rounded-lg *:bg-gray-100 *:cursor-pointer *:hover:bg-Primary/10">
            <li>
              <Home />
            </li>
            <li>
              <Users />
            </li>
            <li>
              <Tv />
            </li>
            <li>
              <Group />
            </li>
          </ul>
        </div>
        <div>
          <button className="p-6 ring-2 ring-Primary border rounded-full bg-Primary/20 text-white font-semibold">
            
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
