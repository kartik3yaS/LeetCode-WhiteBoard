"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

export function MainNav() {
    const pathname = usePathname()

    return (
        <>
            <div className="p-3 hidden md:flex flex-grow justify-between">
                <div className="flex items-center space-x-6">
                    <Link href="/" className="mr-6 ml-5 flex items-center space-x-2">
                        <span className="hidden text-xl font-bold sm:inline-block">
                            LC Board
                        </span>
                    </Link>
                    <nav className="flex items-center gap-4 text-sm lg:gap-6">
                        <Link
                        href="https://leetcode.com/problemset/"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === "https://leetcode.com/problemset/" ? "text-foreground" : "text-foreground/60"
                        )}
                        >
                            <span className="text-lg">Problems</span>
                        </Link>
                    </nav>
                </div>
                <div className="mr-5 flex items-center">
                    <ModeToggle />
                </div>
            </div>
            <div className="inset-x-0 bottom-0 h-0.5 bg-gray-600"></div>
        </>
    )
}