"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href, activeClassName, ...props }) => {
  const path = usePathname();
  const active = path.startsWith(href);
  console.log("path", path);
  return <Link href={href}>{children}</Link>;
};

export default NavLink;
