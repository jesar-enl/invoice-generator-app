'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="fixed bg-violet-700 top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50 z-50">
        <Link href="/" className="text-slate-50 font-bold text-2xl md:text-4xl">
          Invoicer
        </Link>
        <nav className="hidden sm:flex items-center gap-3">
          <Link
            href="/features"
            className="hover:bg-slate-400 hover:px-3 hover:py-3 hover:rounded-lg"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:bg-slate-400 hover:px-3 hover:py-3 hover:rounded-lg"
          >
            Pricing
          </Link>
          <Link
            href="/free-tools"
            className="hover:bg-slate-400 hover:px-3 hover:py-3 hover:rounded-lg"
          >
            Free Tools
          </Link>
        </nav>
        <div className="hidden sm:flex gap-4 items-center">
          <Link
            className="text-white font-medium px-5 py-3 text-center mr-2 mb-2 rounded-lg text-sm bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800"
            href="/login"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-white font-medium px-5 py-3 text-center mr-2 mb-2 rounded-lg text-sm bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800"
          >
            Register
          </Link>
        </div>
        <button className="text-3xl sm:hidden" onClick={() => setShow(true)}>
          <BiMenu />
        </button>
      </header>

      <div
        className={
          show
            ? 'sm:hidden fixed w-32 top-0 right-0 h-screen bg-slate-800 z-50 bg-opacity-90 p-5 text-slate-50'
            : 'hidden sm:hidden fixed w-32 top-0 right-0 h-screen bg-slate-800 z-50 bg-opacity-90 p-5 text-slate-50'
        }
      >
        <div className="flex justify-between items-center font-bold mb-20">
          <button onClick={() => setShow(false)}>
            <AiOutlineClose className="text-2xl text-red-700 bg-slate-50 rounded-full" />
          </button>
        </div>
        <nav className="flex flex-col mb-10 items-start gap-4">
          <Link
            href="/features"
            className="hover:bg-slate-400 hover:px-3 hover:py-3 hover:rounded-lg"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:bg-slate-400 hover:px-3 hover:py-3 hover:rounded-lg"
          >
            Pricing
          </Link>
          <Link
            href="/free-tools"
            className="hover:bg-slate-400 hover:px-3 hover:py-3 hover:rounded-lg"
          >
            Free Tools
          </Link>
        </nav>
        <div className="flex flex-col gap-3 items-start">
          <Link
            className="text-white font-medium px-5 py-3 text-center mr-2 mb-2 rounded-lg text-sm bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800"
            href="/login"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-white font-medium px-5 py-3 text-center mr-2 mb-2 rounded-lg text-sm bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
