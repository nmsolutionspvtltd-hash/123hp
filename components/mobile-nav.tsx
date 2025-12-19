"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-[#0096D6] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div className="absolute top-0 right-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-700 hover:text-[#0096D6] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="#"
                className="text-gray-700 hover:text-[#0096D6] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                OfficeJet
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#0096D6] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                DeskJet
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#0096D6] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                ENVY
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#0096D6] transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                LaserJet
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
