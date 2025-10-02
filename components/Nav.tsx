import { Ghost } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "About me" },
  { href: "/", label: "Projects" },
  { href: "/", label: "Contact" },
];

export default function Nav() {
  return (
    <div className="w-full h-28 bg-black/35 p-2 px-16">
      <div className="flex flex-row items-center justify-between w-full h-full">
        <div>
          <h1 className="text-white uppercase tracking-widest text-3xl font-medium">
            Pedro
            <span className="text-green-400 lowercase">/Dev..</span>
          </h1>
        </div>

        <div className="text-white flex space-x-6">
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
      </div>
    </div>
  );
}