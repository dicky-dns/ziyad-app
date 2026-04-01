"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className="sticky w-full max-w-[1580px] mx-auto top-0 z-50 bg-white/80 backdrop-blur mb-5 px-4">
        <div className="flex items-center justify-between h-16 md:h-20 px-1 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
          
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="ZiyadStore"
                width={140}
                height={40}
                priority
                className="h-8 w-auto md:h-9"
              />
            </Link>
          </div>

        </div>
    </header>
  );
}
