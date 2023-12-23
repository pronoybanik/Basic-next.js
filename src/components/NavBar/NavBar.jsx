import Link from "next/link";
import React from "react";
import NavLink from "../NavLink/NavLink";

const NabBarInfo = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashBoard",
    title: "DashBoard",
  },
];
const NavBar = () => {
  return (
    <div className="flex justify-between items-center container mx-auto mt-2">
      <div className="font-bold text-2xl">Hero</div>
      <div className="flex justify-between items-center gap-2">
        {NabBarInfo.map((NabBarData) => (
          <NavLink key={NabBarData.path} href={NabBarData.path}>
            {NabBarData.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
