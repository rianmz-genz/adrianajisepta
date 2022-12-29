import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import ThemeSwitch from "../buttons/ThemeSwitch";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="pt-6 sticky top-0 z-10 transition-all duration-500">
      <nav
        className="w-full px-6 py-4 rounded-full max-sm:rounded-lg bg-transparent transition-all duration-300 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center dark:bg-transparent backdrop-blur-md bg-opacity-25"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="w-full flex items-center justify-between lg:w-fit">
          <div className="flex gap-2 items-center">
            <button
              className="text-gray-600 text-2xl lg:hidden dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <a
              href="#banner"
              className="text-3xl text-gray-700 font-source-sans font-semibold dark:text-white"
              onClick={(e) => {
                e.preventDefault();
                const targetElement =
                  document.querySelector < HTMLElement > "#banner";
                if (targetElement) {
                  window.scrollTo(0, targetElement?.offsetTop - 92);
                }
              }}
            >
              Adrian
            </a>
          </div>
          <div className="w-fit h-fit flex lg:hidden ml-6">
            <ThemeSwitch />
          </div>
        </div>

        <NavItem show={isMenuOpen}>
          <NavLink target="#banner">Home</NavLink>
          <NavLink target="#about">About</NavLink>
          <NavLink target="#skill">Skill</NavLink>
          <NavLink target="#project">Project</NavLink>
          <NavLink target="#contact">Contact</NavLink>
          <div className="w-fit h-fit hidden lg:flex ml-6">
            <ThemeSwitch />
          </div>
        </NavItem>
      </nav>
    </header>
  );
};

export default Navbar;
