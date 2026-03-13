"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <Container>

        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            MySite
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        )}

      </Container>
    </nav>
  );
}