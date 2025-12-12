"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Sling as Hamburger } from "hamburger-react";

// Type definition for nav items
interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// Navigation items with SVG icons
const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l9-9 9 9v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9z"
        />
      </svg>
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12v.01M12 12v.01M8 12v.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    label: "FAQ",
    href: "/faq",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
  },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const last = useRef<number>(0);
  const cartCount: number = 0;

  const hamburgerPosition: string = "absolute top-2 right-4";

  // Hide header on scroll (desktop)
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > last.current && y > 80) setHidden(true);
      else setHidden(false);
      last.current = y;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scrolling when sidebar is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Header */}
      <header
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-linear-to-b from-rose-800 via-rose-800 to-rose-800",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between p-3 lg:px-8 font-sans relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <h1 className="font-semibold italic tracking-wide text-xl sm:text-2xl text-white">
              Sweet Delights
            </h1>
          </Link>
          
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center font-medium gap-4 ml-12">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-3 py-1 text-white font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search + Cart + Hamburger */}
          <div className="flex items-center gap-6 ml-auto">
            {/* Search */}
            <div className="hidden sm:flex relative">
              <input
                type="text"
                placeholder="Search candies..."
                className="w-96 pl-12 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-shadow duration-300 shadow-sm"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white pointer-events-none">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </span>
            </div>

            {/* Cart */}
            <Link href="/checkout" className="relative text-white">
              <i className="ri-shopping-basket-2-fill text-2xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center bg-rose-500 text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <div className="lg:hidden">
              <Hamburger toggled={open} toggle={setOpen} size={24} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 z-20 transition-opacity duration-500 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile sidebar */}
      <aside
        className={clsx(
          "lg:hidden fixed top-0 right-0 h-full z-30 w-72 sm:max-w-sm overflow-hidden px-6 py-8 shadow-2xl transition-transform duration-500 ease-in-out rounded-l-4xl bg-linear-to-b from-rose-800 via-rose-800 to-rose-900/80 backdrop-blur-3xl",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Hamburger inside sidebar */}
        <div className={hamburgerPosition}>
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={28}
            duration={0.5}
            label="Close menu"
            color="#fff"
          />
        </div>

        {/* Sidebar links */}
        <div className="flow-root mt-24">
          <div className="text-left relative">
            {navItems.map((item: NavItem, index: number) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <div
                  className={clsx(
                    "flex items-center gap-4 w-full px-6 py-5 text-lg font-semibold text-white rounded-xl transform transition duration-500 relative",
                    open
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  )}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                  <div className="absolute left-6 bottom-0 h-px w-[calc(100%-2.5rem)] bg-white/20 rounded-full"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
