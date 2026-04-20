"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="group flex flex-col items-start z-50">
          <span className="font-serif text-2xl tracking-[0.15em] uppercase text-brand-accent transition-opacity group-hover:opacity-70">
            Aiden Rhaa
          </span>
          <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-brand-gray mt-1">
            Photography
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-brand-accent font-medium"
                  : "text-brand-gray hover:text-brand-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-brand-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-[#FAF9F6] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col space-y-8 text-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-serif text-4xl tracking-wider transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-brand-accent italic"
                    : "text-brand-gray hover:text-brand-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
