"use client";
import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-Fast bg-transparent text-white">
            Log in
          </NavigationMenuTrigger>
          <NavigationMenuContent className="font-Roboto  font-bold bg-[#00000010]">
            <ul className="grid w-[200px] gap-4 text-3xl ">
              <li>
                <NavigationMenuLink asChild className="">
                  <Link href="/login/announcer">Announcer</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/login/partner">Partner</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/login/admin">Admin</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function NavigationMenu2() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-Fast bg-transparent text-white">
            Cash Out
          </NavigationMenuTrigger>
          <NavigationMenuContent className="font-Roboto  font-bold bg-[#00000010]">
            <ul className="grid w-[200px] gap-4 text-3xl ">
              <li>
                <NavigationMenuLink asChild className="">
                  <Link href="/how-to-play">How to play</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/dailygiveway">Daily Giveway</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/jackpot">Jackpot</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/winners">Winners</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
