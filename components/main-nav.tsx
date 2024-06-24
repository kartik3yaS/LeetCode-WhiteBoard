"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import whiteboard from "./assets/whiteboard.png";

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <div className="mr-4 hidden md:flex">
        <Image src={whiteboard} alt="" className="h-9 w-9 rounded-lg" />
        <Link href="/" className="ml-3 mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">LC Board</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="https://leetcode.com/explore/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Explore
          </Link>
          <Link
            href="/problems"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/problems"
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Problems
          </Link>
          <Link
            href="https://leetcode.com/contest/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Contest
          </Link>
        </nav>
      </div>
    </>
  );
}
