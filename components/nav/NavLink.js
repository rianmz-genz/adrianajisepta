import { useState, useEffect } from "react";

const NavLink = ({ children, target }) => {
  const [isActive, setIsActive] = useState(false);
  const headerHeight = 92;
  useEffect(() => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      if (target === "#banner") {
        setIsActive(true);
      }
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + headerHeight >
            targetElement.offsetTop - headerHeight &&
          window.scrollY <
            targetElement.offsetTop +
              targetElement.clientHeight -
              headerHeight -
              24
        ) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }
  }, [target]);
  return (
    <li>
      <a
        itemProp="url"
        href={target}
        className={` text-xl ${
          isActive
            ? "font-semibold text-indigo-500 dark:text-indigo-500"
            : "text-gray-500 dark:text-white/[.75] dark:hover:text-indigo-500"
        } hover:text-indigo-500`}
        onClick={(e) => {
          e.preventDefault();
          if (document && window) {
            const targetElement = document.querySelector(target);
            if (targetElement) {
              window.scrollTo(0, targetElement.offsetTop - headerHeight);
            }
          }
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default NavLink;
