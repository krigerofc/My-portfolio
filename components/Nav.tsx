'use client';

import { useState } from "react";
import { Ghost, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black/35 backdrop-blur-md z-50">
      <div className="flex flex-row items-center justify-between w-full h-28 p-2 px-6 md:px-16">

        <div>
          <h1 className="text-white uppercase tracking-widest text-3xl font-medium">
            Pedro
            <span className="text-green-400 lowercase">
              /Dev.<span className="animate-blink">_</span>
            </span>
          </h1>
        </div>


        <div className="hidden md:flex text-white space-x-6">
          {navLinks.map((link) => (
            <Button
              asChild
              variant="ghost"
              key={link.label}
              className="relative text-2xl rounded-none hover:text-green-500 hover:bg-transparent transition-colors duration-300 group px-2"
            >
              <Link href={link.href} className="flex flex-col items-center">
                <span>{link.label}</span>
                <span
                  className={clsx(
                    "absolute left-0 bottom-0 h-0.5 bg-green-500 rounded-none",
                    "w-0 group-hover:w-full transition-all duration-300"
                  )}
                />
              </Link>
            </Button>
          ))}
        </div>


        <div className="md:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            className="text-white text-3xl"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-gray-950/65 text-white backdrop-blur-md flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <Button
              asChild
              variant="ghost"
              key={link.label}
              className="relative text-2xl rounded-none hover:text-green-500 hover:bg-transparent transition-colors duration-300 group px-2"
              onClick={() => setIsOpen(false)}
            >
              <Link href={link.href} className="flex flex-col items-center">
                <span>{link.label}</span>
                <span
                  className={clsx(
                    "absolute left-0 bottom-0 h-0.5 bg-green-500 rounded-none",
                    "w-0 group-hover:w-full transition-all duration-300"
                  )}
                />
              </Link>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
