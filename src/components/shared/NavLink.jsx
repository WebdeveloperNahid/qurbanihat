"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathname = usePathname();
    console.log(pathname,"pathname");

    const isActive = href === pathname

    
    return (
      <Link href={href} className={`${isActive ? "border-2 border-green-400 py-1 px-2 rounded-[5px] text-green-500" :"" }`} >{children}
      </Link>
    );
};

export default NavLink;