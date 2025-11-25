"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import { Button } from "../ui/button";

const navBarItems = [
  { name: 'Home', href: '/' },
  { name: 'Lab Test', href: '/lab-test' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [])

  return (
    <header className="flex justify-center">
      <nav className="fixed top-0 z-20 px-2 max-w-4xl w-full">
        {/* <div
          className={cn(
            "mx-auto mt-2 w-full px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
            "bg-white rounded-2xl shadow-xl transition-[max-width] lg:px-5"
          )}
        > */}
        <div
          className="mx-auto mt-2 w-full px-6 py-3 bg-white rounded-full shadow-md relative z-10"
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2">
            {/* logo and mobile menu button */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                className="flex gap-2 items-center"
              >
                <Image src="/images/logo.jpeg" alt="logo" width={40} height={40} className="rounded-lg" />
              </Link>

              <button
                onClick={() => setNavbarState(!navbarState)}
                aria-label={navbarState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                {navbarState ? (
                  <X className="m-auto size-6 duration-200" />
                ) : (
                  <Equal className="m-auto size-6 duration-200" />
                )}
              </button>
            </div>

            {/* desktop menu */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navBarItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* desktop cta button */}
            <div className="hidden gap-2 lg:flex">
              {/* {authStatus ? <UserProfile /> : <> */}
              <Link href="/login" className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-800 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar