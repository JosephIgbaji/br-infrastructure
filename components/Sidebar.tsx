import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/Br-Logo-JPG.jpg";
import logo1 from "../assets/Br-Logo-white.png";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
    <section className="bg-sky-800 w-auto h-screen py-20 px-5 lg:px-16 fixed ">
      <div className="flex flex-col h-full justify-between items-center">
        <div className="flex flex-col items-center">
          <Image className="hidden lg:block" src={logo} width={120} alt="logo" />
          <Image className="lg:hidden" src={logo1} width={70} alt="logo" />
          <ul className="mt-10 text-white">
            {links.map((link) => (
              <li
                key={link.title}
              >
                <Link className="flex items-center gap-3 text-3xl lg:text-2xl mb-5 hover:text-green-400" href={link.href}>
                  <div className="">
                    {link.icon}
                  </div>
                  <h1 className="hidden lg:inline-block">
                    {link.title}
                  </h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
