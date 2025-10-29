"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container-max section-padding">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-montserrat text-primary text-xl font-semibold"
          >
            Thierry | Coach Professionnel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-montserrat hover:text-primary text-gray-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-montserrat hover:text-primary block py-2 text-gray-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
