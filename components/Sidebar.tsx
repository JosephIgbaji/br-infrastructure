import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/Br-Logo-JPG.jpg";

const Sidebar = () => {
  const links = [
    {
      title: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      title: "Add",
      href: "/add",
      icon: <FaPlus />,
    },
  ];
  return (
    <aside className="hidden lg:block bg-blue-800 w-[250px] h-screen p-20 fixed ">
      <Image src={logo} alt="logo" />
      <ul className="mt-10 text-white">
        {links.map((link) => (
          <li
            key={link.title}
            className="flex items-center gap-3 text-xl mb-3 hover:text-green-400"
          >
            {link.icon}
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
