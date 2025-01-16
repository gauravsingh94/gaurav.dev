"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Open Source" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/background", label: "Background" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  // { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-10 border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl lg:ml-4">
      <div className="absolute rounded-xl inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
      <div className="flex h-16 items-center px-6 justify-between">
        <div
          className={cn(
            "md:flex md:gap-6 text-sm z-20",
            "absolute md:static left-0 right-0 top-16 md:top-auto",
            "bg-background/95 md:bg-transparent",
            "flex-col md:flex-row p-4 md:p-0",
            isOpen ? "flex" : "hidden md:flex",
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-purple-500 py-2 md:py-0",
                pathname === link.href
                  ? "text-purple-500"
                  : "text-muted-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden z-20 text-muted-foreground hover:text-purple-500"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
